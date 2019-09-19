import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getUserRoles,
  getSelectedUserRoles
} from 'src/app/store/selectors/user-roles.selectors';
import {
  updateUserRole,
  assignUserRole,
  assignUserGroup,
  updateUserGroup
} from 'src/app/store/actions';
import {
  getSelectedUserGroups,
  getUserGroups
} from 'src/app/store/selectors/user-groups.selectors';
import { UserRoles } from '../../models/user-roles.model';
import { UserGroup } from '../../models/user-group.model';

@Component({
  selector: 'app-user-role-assignment',
  templateUrl: './user-role-assignment.component.html',
  styleUrls: ['./user-role-assignment.component.css']
})
export class UserRoleAssignmentComponent implements OnInit {
  @Input() userRoles: UserRoles[];
  @Input() userGroups: UserGroup[];

  userRoles$: Observable<any[]>;
  selectedUserRoles: any[];
  userGroups$: Observable<any[]>;
  selectedUserGroups: any[];

  searchTerm: any;
  OrgUnits: any;
  DataView: any;

  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private store: Store<State>
  ) {}

  userRoleForm: FormGroup;
  userRoleAssignmentData: any = {
    formControlName: 'filter'
  };

  ngOnInit() {
    console.log('USER GROUPS', this.userGroups);
    this.userRoles$ = this.store.select(getUserRoles);
    this.store
      .select(getSelectedUserRoles)
      .subscribe(
        selectedRoles =>
          (this.selectedUserRoles = _.map(selectedRoles, userRole =>
            _.pick(userRole, ['id', 'name'])
          ))
      );
    this.userGroups$ = this.store.select(getUserGroups);
    this.store
      .select(getSelectedUserGroups)
      .subscribe(
        selectedGroups =>
          (this.selectedUserGroups = _.map(selectedGroups, userGroup =>
            _.pick(userGroup, ['id', 'name'])
          ))
      );
    if (this.userRoles) {
      this.updateUserRole(this.userRoles);
    }
    this.userRoleForm = this.fb.group({});
    this.userRoleForm.addControl(
      this.userRoleAssignmentData.formControlName,
      new FormControl('')
    );
  }

  onUpdateUserGroupList(e, group: any) {
    e.stopPropagation();
    const updatedGroup = {
      ...group,
      selected: !group.selected
    };

    this.store.dispatch(
      updateUserGroup({
        userGroup: { id: updatedGroup.id, changes: updatedGroup }
      })
    );
  }

  onAssignUserGroupList(e, selectAll: boolean) {
    e.stopPropagation();
    let assignedGroup = [];
    this.userGroups$.subscribe(userGroup => (assignedGroup = userGroup));

    let returnedGroups = assignedGroup.map(group =>
      Object.assign(
        {},
        { id: group.id, changes: { ...group, selected: selectAll } }
      )
    );
    this.store.dispatch(
      assignUserGroup({
        userGroup: returnedGroups
      })
    );
  }

  onUpdateUserRoleList(e, role: any) {
    e.stopPropagation();
    const updatedRole = {
      ...role,
      selected: !role.selected
    };

    this.store.dispatch(
      updateUserRole({ userRole: { id: updatedRole.id, changes: updatedRole } })
    );
  }

  onAssignUserRoleList(e, selectAll: boolean) {
    e.stopPropagation();
    let assignedRole = [];
    this.userRoles$.subscribe(userRole => (assignedRole = userRole));

    const returnedRoles = assignedRole.map(role =>
      Object.assign(
        {},
        { id: role.id, changes: { ...role, selected: selectAll } }
      )
    );
    this.store.dispatch(
      assignUserRole({
        userRole: returnedRoles
      })
    );
  }

  updateUserRole(roles: UserRoles[]) {
    const returnedRoles = roles.map(role =>
      Object.assign({}, { id: role.id, changes: role })
    );
    console.log('USER ROLES', returnedRoles);

    this.store.dispatch(
      assignUserRole({
        userRole: returnedRoles
      })
    );
  }

  onSearch() {
    this.searchTerm = this.userRoleForm.value.filter;
  }
}
