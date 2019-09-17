import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { OrgUnitDialogComponent } from '../org-unit-dialog/org-unit-dialog.component';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() searchByName: EventEmitter<string> = new EventEmitter();
  @Output() searchByRole: EventEmitter<any> = new EventEmitter();
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

  constructor() {}

  ngOnInit() {}

  onSearchNameFocus(e) {
    this.searchByName.emit(e.target.value);
  }

  onSearchRoleFocus(e) {
    this.searchByRole.emit(e.target.value);
  }

  onSearchGroupFocus(e) {
    this.searchByGroup.emit(e.target.value);
  }

  onSearchDateFocus(e) {
    const date = moment(e.value).format('YYYY-MM-DD');
    console.log(date);
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
