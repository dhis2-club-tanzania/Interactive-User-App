import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-org-unit-dialog",
  templateUrl: "./org-unit-dialog.component.html",
  styleUrls: ["./org-unit-dialog.component.css"]
})
export class OrgUnitDialogComponent implements OnInit {
  selectedOrgUnitItems: any[];
  selectionFilterConfig: any = {
    orgUnitFilterConfig: {
      showOrgUnitLevelGroupSection: false,
      showUserOrgUnitSection: false,
      singleSelection: false
    }
  };
  DialogData: any;

  constructor(
    private dialogRef: MatDialogRef<OrgUnitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onOrgUnitDialogClose(e, UPDATE) {
    console.log(this.DialogData);
    this.dialogRef.close();
  }

  onOrgUnitDialogUpdate(e, UPDATE) {
    this.DialogData = e.items;
  }
}
