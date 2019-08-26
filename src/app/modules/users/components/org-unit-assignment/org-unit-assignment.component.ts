import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-org-unit-assignment",
  templateUrl: "./org-unit-assignment.component.html",
  styleUrls: ["./org-unit-assignment.component.css"]
})
export class OrgUnitAssignmentComponent implements OnInit {
  groups: any[] = [];

  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.userservice
      .getUserGroups()
      .subscribe(Groups => (this.groups = Groups.userGroups));
  }
}
