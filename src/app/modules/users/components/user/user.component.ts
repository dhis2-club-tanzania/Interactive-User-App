import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  paginationDetails: any;
  constructor() {}

  ngOnInit() {}

  onPaginationUpdate(paginationChanges) {
    this.paginationDetails = paginationChanges;
    // console.log(paginationChanges);
  }
}
