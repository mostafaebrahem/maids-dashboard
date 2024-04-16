import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  searchValue: number | null = null;
  allData: any;
  constructor(private _httpClient: HttpClient) {}
  getData(pageNumber: number = 1): Observable<any> {
    return this._httpClient.get(
      `https://reqres.in/api/users?page=${pageNumber}`
    );
  }
  handleSearch(): Observable<any> {
    return this.allData.filter((item: any) => {
      item.id === this.searchValue;
    });
  }
  getSingleUser(id: number): Observable<any> {
    return this._httpClient.get(`https://reqres.in/api/users/${id}`);
  }
}
