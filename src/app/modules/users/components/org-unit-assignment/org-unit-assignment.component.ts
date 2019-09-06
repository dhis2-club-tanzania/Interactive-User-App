import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';

import { updateUserGroup, assignUserGroup } from 'src/app/store/actions';
import { group } from '@angular/animations';

import {
  updateUserDimension,
  assignUserDimension
} from 'src/app/store/actions';
import { getUserGroups } from 'src/app/store/selectors/user-groups.selectors';
import { getUserDimensions } from 'src/app/store/selectors/user-dimensions.selectors';
import { getSelectedUserGroups } from 'src/app/store/selectors/user-groups.selectors';
import { getSelectedUserDimensions } from 'src/app/store/selectors/user-dimensions.selectors';

@Component({
  selector: 'app-org-unit-assignment',
  templateUrl: './org-unit-assignment.component.html',
  styleUrls: ['./org-unit-assignment.component.css']
})
export class OrgUnitAssignmentComponent implements OnInit {
  @Output() saveUser: EventEmitter<boolean> = new EventEmitter();

  userGroups$: Observable<any[]>;
  selectedUserGroups: any[];
  userDimensions$: Observable<any[]>;
  selectedUserDimensions: any[];
  searchTerm: any;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  orgUnitForm: FormGroup;
  orgUnitAssignmentData: any = {
    formControlName: 'filter'
  };

  ngOnInit() {
    this.userGroups$ = this.store.select(getUserGroups);
    this.store
      .select(getSelectedUserGroups)
      .subscribe(
        selectedGroups =>
          (this.selectedUserGroups = _.map(selectedGroups, userGroup =>
            _.pick(userGroup, ['id', 'name'])
          ))
      );
    this.userDimensions$ = this.store.select(getUserDimensions);
    this.store
      .select(getSelectedUserDimensions)
      .subscribe(
        selectedDimensions =>
          (this.selectedUserDimensions = _.map(
            selectedDimensions,
            userDimension => _.pick(userDimension, ['id', 'name'])
          ))
      );

    // this.userservice
    //   .getUserDimensions()
    //   .subscribe(Dimensionss => (this.dimensions = Dimensionss.dimensions));

    this.orgUnitForm = this.fb.group({});
    this.orgUnitForm.addControl(
      this.orgUnitAssignmentData.formControlName,
      new FormControl('')
    );
  }
  onOrgUnitUpdate(e, UPDATE) {}

  // tslint:disable-next-line: no-shadowed-variable
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

  onUpdateUserDimensionList(e, dimension: any) {
    e.stopPropagation();
    const updatedDimension = {
      ...dimension,
      selected: !dimension.selected
    };

    this.store.dispatch(
      updateUserDimension({
        userDimension: { id: updatedDimension.id, changes: updatedDimension }
      })
    );
  }

  onAssignUserDimensionList(e, selectAll: boolean) {
    e.stopPropagation();
    let assignedDimension = [];
    this.userDimensions$.subscribe(
      userDimension => (assignedDimension = userDimension)
    );

    let returnedDimensions = assignedDimension.map(dimension =>
      Object.assign(
        {},
        { id: dimension.id, changes: { ...dimension, selected: selectAll } }
      )
    );
    this.store.dispatch(
      assignUserDimension({
        userDimension: returnedDimensions
      })
    );
  }

  onSearch() {
    this.searchTerm = this.orgUnitForm.value.filter;
  }

  onSubmit() {
    this.saveUser.emit();
  }
}
