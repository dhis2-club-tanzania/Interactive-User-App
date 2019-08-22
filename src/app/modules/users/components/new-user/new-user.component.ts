import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { BasicUserInfoComponent } from "../basic-user-info/basic-user-info.component";
import { UserRoleAssignmentComponent } from "../user-role-assignment/user-role-assignment.component";
import { OrgUnitAssignmentComponent } from "../org-unit-assignment/org-unit-assignment.component";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  @ViewChild(BasicUserInfoComponent, { static: false })
  basicUserInfoComponent: BasicUserInfoComponent;
  @ViewChild(UserRoleAssignmentComponent, { static: false })
  userRoleAssignmentComponent: UserRoleAssignmentComponent;
  @ViewChild(OrgUnitAssignmentComponent, { static: false })
  orgUnitAssignment: OrgUnitAssignmentComponent;
  constructor(private router: Router) {}

  ngOnInit() {}

  onBasicInfo(e) {
    e.stopPropagation();
    this.router.navigate(["/user/create-user/basic-user-info"]);
  }

  get formStep1() {
    return this.basicUserInfoComponent
      ? this.basicUserInfoComponent.basicUserForm
      : null;
  }
}
