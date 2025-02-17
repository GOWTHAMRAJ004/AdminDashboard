import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url = 'http://localhost:8085/api/getAllUser'
  constructor(private http: HttpClient) { 
  }
  getAllProducts():Observable<any>{

    return this.http.get<product[]>(this.url);

  }
}
