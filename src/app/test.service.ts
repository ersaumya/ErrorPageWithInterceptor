import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiurl="https://jsonplaceholder.typicode.com/postsk";
  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(this.apiurl);
  }
}
