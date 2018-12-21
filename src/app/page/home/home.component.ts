import { Component, OnInit,Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class RandomUserService {
  randomUserUrl = 'https://api.randomuser.me/';
  getUsers(pageIndex: number = 1, pageSize: number = 10, sortField: string, sortOrder: string, genders: string[]): Observable<{}> {
    let params = new HttpParams()
    .append('page', `${pageIndex}`)
    .append('results', `${pageSize}`)
    .append('sortField', sortField)
    .append('sortOrder', sortOrder);
    genders.forEach(gender => {
      params = params.append('gender', gender);
    });
    return this.http.get(`${this.randomUserUrl}`, {
      params
    });
  }

  constructor(private http: HttpClient) {
  }
}
@Component({
    selector: 'storeHome',
    templateUrl: 'home.component.html',
    providers: [ RandomUserService ],
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit { 
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  dataSet = [];
  loading = true;
  sortValue = null;
  sortKey = null;
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' }
  ];
  searchGenderList: string[] = [];

  sort(sort: { key: string, value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.searchData();
  }

  constructor(private randomUserService: RandomUserService) {
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.randomUserService.getUsers(this.pageIndex, this.pageSize, this.sortKey, this.sortValue, this.searchGenderList).subscribe((data: any) => {
      this.loading = false;
      this.total = 200;
      this.dataSet = data.results;
    });
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.searchData(true);
  }
  listOfSelection = [
    {
      text    : 'Select All Row',
      onSelect: () => {
        this.checkAll(true);
      }
    }]
    allChecked = false;
  dataSet1: Array<{ name: string; age: number; address: string; checked: boolean }> = [];
  indeterminate = false;
    refreshStatus(): void {
      const allChecked = this.dataSet.every(value => value.checked === true);
      const allUnChecked = this.dataSet.every(value => !value.checked);
      this.allChecked = allChecked;
      this.indeterminate = (!allChecked) && (!allUnChecked);
    }
  
    checkAll(value: boolean): void {
      this.dataSet.forEach(data => data.checked = value);
      this.refreshStatus();
    }

  ngOnInit(): void {
    this.searchData();
  }
}