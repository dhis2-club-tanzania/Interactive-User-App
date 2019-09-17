import { Component, OnInit, Input } from "@angular/core";
import { DataSource } from "@angular/cdk/collections";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";
import { User } from "src/app/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/reducers";
import { getUsers } from "src/app/store/selectors/users.selectors";

import { getSanitizedUsers } from "src/app/core/helpers";
import { MatTableDataSource } from "@angular/material";

import * as _ from "lodash";

export interface UsersDetails {
  displayName: string;
  username: string;
  lastLogin: string;
  disabled: boolean;
  menu: string;
}

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.css"]
})
export class UserTableComponent implements OnInit {
  @Input() paginationDetails;
  @Input() users;
  displayedColumns: string[] = [
    "displayName",
    "username",
    "lastLogin",
    "disabled",
    "menu"
  ];
  dataSource;

  constructor(private router: Router) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UsersDetails>(
      getSanitizedUsers(this.users)
    );
    this.dataSource.filterPredicate = (user, filter) => {
      const searchArray = filter.split("_");
      if (searchArray[0] === "role") {
        for (const role of user.userRoles) {
          if (
            role.name
              .toLocaleLowerCase()
              .indexOf(searchArray[1].toLocaleLowerCase()) != -1
          ) {
            return true;
          }
        }
        return false;
      } else if (searchArray[0] === "name") {
        return (
          user.displayName
            .toLocaleLowerCase()
            .indexOf(searchArray[1].toLocaleLowerCase()) != -1
        );
      } else if (searchArray[0] === "group") {
        for (const group of user.userGroups) {
          if (
            group.name
              .toLocaleLowerCase()
              .indexOf(searchArray[1].toLocaleLowerCase()) != -1
          ) {
            return true;
          }
        }
      }
      return false;
    };
    this.dataSource.paginator = this.paginationDetails;
  }

  onApplyFilter(searchedTerm: { value: string; filter: string }) {
    const filterString = searchedTerm.filter + "_" + searchedTerm.value;
    this.dataSource.filter = filterString;
  }

  onCreateUser(e) {
    e.stopPropagation();
    this.router.navigate(["user/create-user"]);
  }

  onEditUser(e, id: any) {
    e.stopPropagation();
    this.router.navigate([`user/edit-user/${id}`]);
  }
}
