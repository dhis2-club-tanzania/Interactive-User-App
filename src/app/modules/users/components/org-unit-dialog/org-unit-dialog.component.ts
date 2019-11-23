import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";

export class DialogData {
  data: string;
}
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
  dialogData: any;

  constructor(
    private dialogRef: MatDialogRef<OrgUnitDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  onOrgUnitDialogClose(e, UPDATE) {
    this.dialogRef.close(this.dialogData);
  }

  onOrgUnitDialogUpdate(e, UPDATE) {
    this.dialogData = e.items[0];
  }
}
