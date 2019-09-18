<<<<<<< HEAD
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { OrgUnitDialogComponent } from '../org-unit-dialog/org-unit-dialog.component';
=======
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import * as moment from "moment";
import { OrgUnitDialogComponent } from "../org-unit-dialog/org-unit-dialog.component";
>>>>>>> ca37bf0e2b25e7a2285c99816ae8e3e02f1f250c
@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
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
  @Output() searchByGroup: EventEmitter<{
    value: string;
    control: string;
  }> = new EventEmitter();
  @Output() searchByDate: EventEmitter<any> = new EventEmitter();
  @Output() searchByInvitation: EventEmitter<{
    value: boolean;
    control: string;
  }> = new EventEmitter();
  @Output() searchBySelfRegistered: EventEmitter<{
    value: boolean;
    control: string;
  }> = new EventEmitter();

  date: any;
  selfRegistered: any;
  Invitation: any;
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

  onSearchGroupFocus(e, prop) {
    this.searchByGroup.emit({ value: e.target.value, control: prop });
  }

  onSearchInvitation(e, prop) {
    // console.log(e);
    this.searchByInvitation.emit({ value: e.value, control: prop });
  }
  onSearchSelfRegistered(e, prop) {
    this.searchBySelfRegistered.emit({ value: e.checked, control: prop });
  }
  onSearchDateFocus(e) {
<<<<<<< HEAD
    const date = moment(e.value).format('YYYY-MM-DD');
    console.log(date);
=======
    const date = moment(e.value).format("YYYY-MM-DD");
>>>>>>> ca37bf0e2b25e7a2285c99816ae8e3e02f1f250c
    this.searchByDate.emit(date);
  }

  onFocus() {}

  openDialog(e): void {
    e.stopPropagation();
    const dialogRef = this.dialog.open(OrgUnitDialogComponent, {
      width: "50%"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
