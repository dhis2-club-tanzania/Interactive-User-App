import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: "app-org-unit-assignment",
  templateUrl: "./org-unit-assignment.component.html",
  styleUrls: ["./org-unit-assignment.component.css"]
})
export class OrgUnitAssignmentComponent implements OnInit {
  groups: any[] = [];
  dimensions: any[] = [];

  constructor(private fb: FormBuilder, private userservice: UserService) {}

  orgUnitForm: FormGroup;
  orgUnitAssignmentData: any = {
    formControlName: "filter"
  };

  ngOnInit() {
    this.userservice
      .getUserGroups()
      .subscribe(Groups => (this.groups = Groups.userGroups));

    this.userservice
      .getUserDimensions()
      .subscribe(Dimensionss => (this.dimensions = Dimensionss.dimensions));

    this.orgUnitForm = this.fb.group({});
    this.orgUnitForm.addControl(
      this.orgUnitAssignmentData.formControlName,
      new FormControl("")
    );
  }
}
