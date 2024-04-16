import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  id: any = 1;
  singleItem: any = [];
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private service: UsersDataService,
    private _Router: Router
  ) {}

  backHandle() {
    this._Router.navigate(['/main']);
  }
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.service.getSingleUser(this.id).subscribe((item) => {
      this.singleItem = item.data;
    });
  }
}
