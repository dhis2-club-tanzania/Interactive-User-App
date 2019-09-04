import { Component, OnInit } from '@angular/core';
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
import { updateUserRole, assignUserRole } from 'src/app/store/actions';
@Component({
  selector: 'app-user-role-assignment',
  templateUrl: './user-role-assignment.component.html',
  styleUrls: ['./user-role-assignment.component.css']
})
export class UserRoleAssignmentComponent implements OnInit {
  userRoles$: Observable<any[]>;
  selectedUserRoles: any[];

  selectionFilterConfig: any = {
    orgUnitFilterConfig: {
      showOrgUnitLevelGroupSection: false,
      showUserOrgUnitSection: false,
      singleSelection: false
    }
  };
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
    this.userRoles$ = this.store.select(getUserRoles);
    this.store
      .select(getSelectedUserRoles)
      .subscribe(
        selectedRoles =>
          (this.selectedUserRoles = _.map(selectedRoles, userRole =>
            _.pick(userRole, ['id', 'name'])
          ))
      );
    this.userRoleForm = this.fb.group({});
    this.userRoleForm.addControl(
      this.userRoleAssignmentData.formControlName,
      new FormControl('')
    );
  }

  onOrganisationUnits(e, UPDATE) {
    this.OrgUnits = e.items;
  }

  onDataViewOrganisationUnits(e, UPDATE) {
    this.DataView = e.items;
  }

  // onOrgUnitUpdate(e, UPDATE) {
  //   // console.log(JSON.stringify(e));
  // }

  onUpdateUserRoleList(e, role: any) {
    e.stopPropagation();
    const updatedRole = {
      ...role,
      selected: !role.selected
    };

    this.store.dispatch(
      updateUserRole({ userRole: { id: updatedRole.id, changes: updatedRole } })
    );
    console.log(this.selectedUserRoles);
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

    console.log(this.selectedUserRoles);
  }

  onSearch() {
    this.searchTerm = this.userRoleForm.value.filter;
  }
}
