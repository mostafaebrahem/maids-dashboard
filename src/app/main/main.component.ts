import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  data: any[] = [];
  filteredData: any = [];
  loading: boolean = false;
  pageIndex: 0 | 1 = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  currentIndex: 1 | 2 = 1;
  constructor(private service: UsersDataService) {}
  pageSlice: any = [];
  ngOnInit(): void {
    this.loading = true;
    this.service.getData(1).subscribe((pageData) => {
      this.data = pageData.data;

      this.pageSlice = this.data.slice(0, 3);

      this.filteredData = [...this.data];
      this.loading = false;
    });
  }
  onPageChange(event: PageEvent): void {
    this.loading = true;
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    this.currentIndex = this.currentIndex === 1 ? 2 : 1;
    this.pageIndex = this.pageIndex === 0 ? 1 : 0;

    this.service.getData(this.currentIndex).subscribe((pageData) => {
      this.loading = false;
      this.data = this.filteredData = pageData.data;
      this.pageSlice = this.data.slice(0, 3);
    });
    if (endIndex > this.data.length) {
      endIndex = this.data.length;
    }

    this.pageSlice = this.data.slice(startIndex, endIndex);
  }
  ngAfterViewInit(): void {}

  onSearch(searchTerm: number | undefined) {
    if (searchTerm === undefined || searchTerm === null) {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(
        (item) => item.id === Number(searchTerm)
      );
    }
  }
}
