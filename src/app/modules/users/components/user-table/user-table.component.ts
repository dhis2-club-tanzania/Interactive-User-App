import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { getSanitizedUsers } from 'src/app/core/helpers';
export interface UsersDetails {
  displayName: string;
  username: string;
  lastLogin: string;
  disabled: boolean;
  menu: string;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @Input() paginationDetails;
  @Input() users;
  displayedColumns: string[] = [
    'displayName',
    'username',
    'lastLogin',
    'disabled',
    'menu'
  ];
  dataSource;

  constructor(private router: Router) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UsersDetails>(
      getSanitizedUsers(this.users)
    );
    this.dataSource.paginator = this.paginationDetails;
  }
  onCreateUser(e) {
    e.stopPropagation();
    this.router.navigate(['user/create-user']);
  }

  onEditUser(e) {
    e.stopPropagation();
    this.router.navigate(['user/edit-user']);
  }
}
