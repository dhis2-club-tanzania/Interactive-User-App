import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-user-pagination",
  templateUrl: "./user-pagination.component.html",
  styleUrls: ["./user-pagination.component.css"]
})
export class UserPaginationComponent implements OnInit {
  // MatPaginator Output
  pageSizeOptions = [5, 10, 25, 100];
  initialPaginationState = {
    previousPageIndex: 0,
    pageIndex: 0,
    pageSize: 5,
    length: 100
  };
  @Output() paginationUpdates: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.onUpdatePagination(this.initialPaginationState);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(str => +str);
  }

  onUpdatePagination(event) {
    this.paginationUpdates.emit(event);
  }
}
