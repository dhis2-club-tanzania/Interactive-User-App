import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getUsers,
  getUsersLoadingState
} from 'src/app/store/selectors/users.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  paginationDetails: any;
  users$: Observable<User[]>;
  usersLoading$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.users$ = this.store.select(getUsers);
    this.usersLoading$ = this.store.select(getUsersLoadingState);
  }

  onPaginationUpdate(paginationChanges) {
    this.paginationDetails = paginationChanges;
    // console.log(paginationChanges);
  }
}
