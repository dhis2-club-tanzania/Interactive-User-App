import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import * as _ from "lodash";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/reducers";
import { getUserGroups } from "src/app/store/selectors/user-groups.selectors";
import { updateUserGroup, assignUserGroup } from "src/app/store/actions";
import { group } from "@angular/animations";
import { getUserDimensions } from "src/app/store/selectors/user-dimensions.selectors";
import {
  updateUserDimension,
  assignUserDimension
} from "src/app/store/actions";

@Component({
  selector: "app-org-unit-assignment",
  templateUrl: "./org-unit-assignment.component.html",
  styleUrls: ["./org-unit-assignment.component.css"]
})
export class OrgUnitAssignmentComponent implements OnInit {
  // groups: any[] = [];
  userGroups$: Observable<any[]>;
  // dimensions: any[] = [];
  userDimensions$: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private store: Store<State>
  ) {}

  orgUnitForm: FormGroup;
  orgUnitAssignmentData: any = {
    formControlName: "filter"
  };

  ngOnInit() {
    this.userGroups$ = this.store.select(getUserGroups);
    this.userDimensions$ = this.store.select(getUserDimensions);

    // this.userservice
    //   .getUserDimensions()
    //   .subscribe(Dimensionss => (this.dimensions = Dimensionss.dimensions));

    this.orgUnitForm = this.fb.group({});
    this.orgUnitForm.addControl(
      this.orgUnitAssignmentData.formControlName,
      new FormControl("")
    );
  }
  onOrgUnitUpdate(e, UPDATE) {}

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
}
