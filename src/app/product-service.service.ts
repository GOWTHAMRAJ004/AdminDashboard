import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './data-type';
import { environment } from './environment';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { 
  }
  getAllProducts():Observable<any>{

    return this.http.get<product[]>(`${this.baseUrl}/getAllUser`);

  }
  createProduct(data: product): Observable<product> {
    console.warn(data);
    return this.http.post<product>(`${this.baseUrl}/createUser`, data);
  }
  findById(data: String):Observable<any>{
    console.warn(data);
     return this.http.get(`${this.baseUrl}/findUserById/${data}`);
  }

  deleteProduct(data: String):Observable<any>{
    console.warn(data);
    return this.http.delete(`${this.baseUrl}/findUserById/${data}`)    
  };
}
