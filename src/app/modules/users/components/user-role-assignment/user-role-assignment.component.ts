import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-user-role-assignment",
  templateUrl: "./user-role-assignment.component.html",
  styleUrls: ["./user-role-assignment.component.css"]
})
export class UserRoleAssignmentComponent implements OnInit {
  roles: any[] = [];

  selectionFilterConfig: any = {
    orgUnitFilterConfig: {
      showOrgUnitLevelGroupSection: false,
      showUserOrgUnitSection: false
    }
  };

  constructor(private fb: FormBuilder, private userservice: UserService) {}

  userRoleForm: FormGroup;
  userRoleAssignmentData: any = {
    formControlName: ["search"]
  };

  ngOnInit() {
    this.userservice
      .getUserRoles()
      .subscribe(Roles => (this.roles = Roles.userRoles));
  }
}

// SelectionFilterConfig =
