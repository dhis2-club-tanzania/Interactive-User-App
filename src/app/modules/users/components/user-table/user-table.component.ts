import { Component, OnInit, Input } from "@angular/core";
import { DataSource } from "@angular/cdk/collections";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";
import { User } from "src/app/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/reducers";
import { getUsers } from "src/app/store/selectors/users.selectors";

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
  @Input() paginationDetails;
  users$: Observable<User[]>;
  displayedColumns: string[] = [
    "displayname",
    "username",
    "lastlogin",
    "disabled",
    "menu"
  ];
  dataSource: any[];

  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.users$ = this.store.select(getUsers);
    // this.userService
    //   .getData()
    //   .subscribe(data => (this.dataSource = data.users));
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
