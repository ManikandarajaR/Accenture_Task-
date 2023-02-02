import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http : HttpClient) { }

  fetch()
  {
      return this.http.get("http://jsonplaceholder.typicode.com/users");
  }

  getdata()
  {
      return this.http.get("http://jsonplaceholder.typicode.com/users")
      .pipe(
        map((response:any = []) => response.map((item : any) =>item['name']))
      )
  }
}

