import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() searchEvent: EventEmitter<number> = new EventEmitter<number>();
  searchId: number | undefined;
  constructor() {}

  ngOnInit(): void {}
  onSearch() {
    this.searchEvent.emit(this.searchId);
  }
}
