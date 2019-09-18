import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicUserInfoComponent } from '../basic-user-info/basic-user-info.component';
import { UserRoleAssignmentComponent } from '../user-role-assignment/user-role-assignment.component';
import { OrgUnitAssignmentComponent } from '../org-unit-assignment/org-unit-assignment.component';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import * as _ from 'lodash';
import { UUID } from '@iapps/utils';
import {
  loadUserRoles,
  loadUserGroups,
  loadUserDimensions,
  createUsers
} from 'src/app/store/actions';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @ViewChild(BasicUserInfoComponent, { static: false })
  basicUserInfoComponent: BasicUserInfoComponent;
  @ViewChild(UserRoleAssignmentComponent, { static: false })
  userRoleAssignmentComponent: UserRoleAssignmentComponent;
  @ViewChild(OrgUnitAssignmentComponent, { static: false })
  orgUnitAssignmentComponent: OrgUnitAssignmentComponent;
  constructor(
    private router: Router,
    private userservice: UserService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.store.dispatch(loadUserRoles());
    this.store.dispatch(loadUserGroups());
    this.store.dispatch(loadUserDimensions());
  }

  onBasicInfo(e) {
    e.stopPropagation();
    this.router.navigate(['/user/create-user/basic-user-info']);
  }

  onSaveUser() {
    const id = UUID();
    const user = {
      id: id,
      displayName:
        this.basicUserInfoComponent.basicUserForm.value.surname +
        ' ' +
        this.basicUserInfoComponent.basicUserForm.value.firstName,
      userCredentials: {
        id: UUID(),
        userInfo: { id: id },
        userRoles: _.map(
          this.userRoleAssignmentComponent.selectedUserRoles,
          userRole => _.pick(userRole, ['id'])
        ),
        username: this.basicUserInfoComponent.basicUserForm.value.username,
        password: this.basicUserInfoComponent.basicUserForm.value.password,
        ldapId: this.basicUserInfoComponent.basicUserForm.value.ldapId,
        openId: this.basicUserInfoComponent.basicUserForm.value.openId
      },
      attributeValues: [],
      ..._.omit(this.basicUserInfoComponent.basicUserForm.value, [
        'password2',
        'username',
        'password',
        'ldapId',
        'openId'
      ]),

      organisationUnits: _.map(
        this.userRoleAssignmentComponent.OrgUnits,
        orgUnit => _.pick(orgUnit, ['id'])
      ),
      dataViewOrganisationUnits: _.map(
        this.userRoleAssignmentComponent.DataView,
        dataView => _.pick(dataView, ['id'])
      ),
      userGroups: _.map(
        this.userRoleAssignmentComponent.selectedUserGroups,
        userGroup => _.pick(userGroup, ['id'])
      ),

      userDimensions: this.orgUnitAssignmentComponent.selectedUserDimensions
    };
    this.store.dispatch(createUsers({ user: user }));
    this.router.navigate(['/user']);
    console.log(user);
  }
}
