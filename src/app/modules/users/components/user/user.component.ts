import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getUsers,
  getUsersLoadingState
} from 'src/app/store/selectors/users.selectors';
import { UserTableComponent } from '../user-table/user-table.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(UserTableComponent, { static: false })
  userTable: UserTableComponent;

  users$: Observable<User[]>;
  usersLoading$: Observable<boolean>;

  paginationDetails: any;
  searchedName: string;
  searchedDate: any;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.searchedName = '';
    this.searchedDate = '';
    this.users$ = this.store.select(getUsers);
    this.usersLoading$ = this.store.select(getUsersLoadingState);
  }

  onPaginationUpdate(paginationChanges) {
    this.paginationDetails = paginationChanges;
  }

  onSearchByName(searchedName) {
    this.userTable.onApplyFilterByName(searchedName);
  }
  onSearchByDate(searchedDate) {
    this.userTable.onApplyFilterByName(searchedDate.toString());
  }
}
