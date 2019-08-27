import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { UserService } from "../../services/user.service";
import * as _ from "lodash";
@Component({
  selector: "app-user-role-assignment",
  templateUrl: "./user-role-assignment.component.html",
  styleUrls: ["./user-role-assignment.component.css"]
})
export class UserRoleAssignmentComponent implements OnInit {
  roles: any[] = [];
  selectedRoles: any[];

  selectionFilterConfig: any = {
    orgUnitFilterConfig: {
      showOrgUnitLevelGroupSection: false,
      showUserOrgUnitSection: false
    }
  };

  constructor(private fb: FormBuilder, private userservice: UserService) {}

  userRoleForm: FormGroup;
  userRoleAssignmentData: any = {
    formControlName: "filter"
  };

  ngOnInit() {
    this.selectedRoles = [];
    this.userservice.getUserRoles().subscribe(
      Roles =>
        (this.roles = _.map(Roles.userRoles, element => {
          return _.assignIn({}, element, { selected: false });
        }))
    );
    this.userRoleForm = this.fb.group({});
    this.userRoleForm.addControl(
      this.userRoleAssignmentData.formControlName,
      new FormControl("")
    );
  }

  onOrgUnitUpdate(e, UPDATE) {}

  onSelectRole(e, role: any) {
    e.stopPropagation();
    _.update(role, "selected", value => !value);
    this.selectedRoles.push(_.pickBy(this.roles, role => role.selected));

    console.log(this.selectedRoles);
  }
}
