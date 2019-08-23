import { Component, OnInit } from "@angular/core";
import { DataSource } from "@angular/cdk/collections";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

export interface PeriodicElement {
  displayname: string;
  username: string;
  lastlogin: string;
  disabled: boolean;
  menu: string;
}

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.css"]
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = [
    "displayname",
    "username",
    "lastlogin",
    "disabled",
    "menu"
  ];
  dataSource: any[];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getData()
      .subscribe(data => (this.dataSource = data.users));
  }
  onCreateUser(e) {
    e.stopPropagation();
    this.router.navigate(["user/create-user"]);
  }

  onEditUser(e) {
    e.stopPropagation();
    this.router.navigate(["user/edit-user"]);
  }
}
