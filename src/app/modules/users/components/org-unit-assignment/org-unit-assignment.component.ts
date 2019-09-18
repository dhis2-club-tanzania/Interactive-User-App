import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  updateUserDimension,
  assignUserDimension
} from 'src/app/store/actions';
import { getUserDimensions } from 'src/app/store/selectors/user-dimensions.selectors';
import { getSelectedUserDimensions } from 'src/app/store/selectors/user-dimensions.selectors';

@Component({
  selector: 'app-org-unit-assignment',
  templateUrl: './org-unit-assignment.component.html',
  styleUrls: ['./org-unit-assignment.component.css']
})
export class OrgUnitAssignmentComponent implements OnInit {
  @Output() saveUser: EventEmitter<boolean> = new EventEmitter();

  userDimensions$: Observable<any[]>;
  selectedUserDimensions: any[];
  searchTerm: any;

  selectionFilterConfig: any = {
    orgUnitFilterConfig: {
      showOrgUnitLevelGroupSection: false,
      showUserOrgUnitSection: false,
      singleSelection: false
    }
  };
  OrgUnits: any;
  DataView: any;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  orgUnitForm: FormGroup;
  orgUnitAssignmentData: any = {
    formControlName: 'filter'
  };

  ngOnInit() {
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

    this.orgUnitForm = this.fb.group({});
    this.orgUnitForm.addControl(
      this.orgUnitAssignmentData.formControlName,
      new FormControl('')
    );
  }
  onOrgUnitUpdate(e, UPDATE) {}

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

  onOrganisationUnits(e, UPDATE) {
    // console.log('Orgunit updated');
    this.OrgUnits = e.items;
  }

  onDataViewOrganisationUnits(e, UPDATE) {
    // console.log('Data view updated');
    this.DataView = e.items;
  }

  onSearch() {
    this.searchTerm = this.orgUnitForm.value.filter;
  }

  onSubmit(e) {
    e.stopPropagation();
    this.saveUser.emit();
  }
}
