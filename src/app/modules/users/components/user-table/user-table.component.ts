import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Router } from '@angular/router';

export interface PeriodicElement {
  displayname: string;
  username: string;
  lastlogin: string;
  disabled: boolean;
  menu: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { displayname: 'Alain', username: 'traore', lastlogin: 'December 30, 2013', disabled: false, menu:'', },
  { displayname: 'Alain', username: 'traore', lastlogin: 'December 30, 2013', disabled: false, menu:'', },
  { displayname: 'Alain', username: 'traore', lastlogin: 'December 30, 2013', disabled: false, menu:'', },
];

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['displayname', 'username', 'lastlogin', 'disabled', 'menu'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreateUser(e){
    e.stopPropagation();
    this.router.navigate(['user/create-user'])
  }
  
}
