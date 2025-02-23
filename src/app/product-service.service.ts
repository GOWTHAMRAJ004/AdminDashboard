import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { product } from './data-type';
import { tap } from 'rxjs/operators';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productsSubject = new BehaviorSubject<product[]>([]);
  products$ = this.productsSubject.asObservable(); 

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<product[]> {
    return this.http.get<product[]>(`${environment.apiUrl}/getAllProducts `).pipe(
      tap(products => this.productsSubject.next(products)) 
    );
  }

  addProduct(newProduct: product): Observable<product> {
    return this.http.post<product>(`${environment.apiUrl}/createProduct`, newProduct).pipe(
      tap(() => this.refreshProducts()) 
    );
  }

  deleteProduct(productId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/deleteProduct/${productId}`).pipe(
      tap((response) => {
       console.log(response);
      })
    );
  }


  updateProductField(productId: string, field: string, value: any): Observable<any> {
    const payload = { field:field,value:value };
    console.log(payload);
  
    return this.http.put<any>(`${environment.apiUrl}/updateProduct/${productId}`, payload).pipe(
      tap(updatedProduct => {
        console.log(updatedProduct);
            })
    );
  }
  
  private refreshProducts() {
    this.getAllProducts().subscribe(); 
  }
}
