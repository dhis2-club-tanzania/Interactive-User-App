import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-user-role-assignment",
  templateUrl: "./user-role-assignment.component.html",
  styleUrls: ["./user-role-assignment.component.css"]
})
export class UserRoleAssignmentComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  userRoleForm: FormGroup;
  userRoleAssignmentData: any = {
    formControlName: ["search"]
  };

  ngOnInit() {}
}
