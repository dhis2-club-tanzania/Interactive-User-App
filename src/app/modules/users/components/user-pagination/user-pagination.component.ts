import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-pagination',
  templateUrl: './user-pagination.component.html',
  styleUrls: ['./user-pagination.component.css']
})
export class UserPaginationComponent implements OnInit {
  // MatPaginator Output
  pageSizeOptions = [5, 10, 25, 100];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Output() paginationUpdates: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.paginationUpdates.emit(this.paginator);
  }
}
