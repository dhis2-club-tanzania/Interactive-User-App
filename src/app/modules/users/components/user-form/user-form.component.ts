import { Component, OnInit } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor() {}

  ngOnInit() {}

  onFocus() {
    console.log("OnFocus");
  }

  onSelect() {
    console.log("OnSelect");
  }
}
