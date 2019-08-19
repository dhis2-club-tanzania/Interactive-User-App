import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';

export interface PeriodicElement {
  displayname: string;
  username: string;
  lastlogin: string;
  disabled: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { displayname: 'Alain', username: 'traore', lastlogin: 'December 30, 2013', disabled: 'Yes'},
];

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['displayname', 'username', 'lastlogin', 'disabled'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
