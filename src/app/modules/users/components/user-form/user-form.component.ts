<<<<<<< HEAD
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { OrgUnitDialogComponent } from '../org-unit-dialog/org-unit-dialog.component';
=======
import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import * as moment from "moment";
import { OrgUnitDialogComponent } from "../org-unit-dialog/org-unit-dialog.component";
>>>>>>> 7b8b4b168ae8cf632334da42301edead5a30ae90
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() searchByName: EventEmitter<{
    value: string;
    control: string;
  }> = new EventEmitter();
  @Output() searchByRole: EventEmitter<{
    value: string;
    control: string;
  }> = new EventEmitter();
  @Output() searchByGroup: EventEmitter<string> = new EventEmitter();
  @Output() searchByDate: EventEmitter<any> = new EventEmitter();

  date: any;
  dialogData: any;
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  dialog: any;
  userService: any;

  constructor() {}

  ngOnInit() {}

  onSearchNameFocus(e, prop) {
    this.searchByName.emit({ value: e.target.value, control: prop });
  }

  onSearchRoleFocus(e, prop) {
    this.searchByRole.emit({ value: e.target.value, control: prop });
  }

  onSearchGroupFocus(e) {
    this.searchByGroup.emit(e.target.value);
  }

  onSearchDateFocus(e) {
<<<<<<< HEAD
    const date = moment(e.value).format('YYYY-MM-DD');
    console.log(date);
=======
    const date = moment(e.value).format("YYYY-MM-DD");
>>>>>>> 7b8b4b168ae8cf632334da42301edead5a30ae90
    this.searchByDate.emit(date);
  }

  onFocus() {}

  openDialog(e): void {
    e.stopPropagation();
    const dialogRef = this.dialog.open(OrgUnitDialogComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
