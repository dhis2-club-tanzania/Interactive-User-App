import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicUserInfoComponent } from '../basic-user-info/basic-user-info.component';
import { UserRoleAssignmentComponent } from '../user-role-assignment/user-role-assignment.component';
import { OrgUnitAssignmentComponent } from '../org-unit-assignment/org-unit-assignment.component';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import * as _ from 'lodash';
import {
  loadUserRoles,
  loadUserGroups,
  loadUserDimensions
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
    const user = {
      ..._.omit(this.basicUserInfoComponent.basicUserForm.value, ['password2'])
    };
    console.log(user);
    this.userservice
      .postNewUser(user)
      .subscribe(resp => console.log(resp), err => console.log(err));
  }
}
