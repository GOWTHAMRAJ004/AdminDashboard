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
    return this.http.get<product[]>(`${environment.apiUrl}/getAllUser`).pipe(
      tap(products => this.productsSubject.next(products)) 
    );
  }

  addProduct(newProduct: product): Observable<product> {
    return this.http.post<product>(`${environment.apiUrl}/createUser`, newProduct).pipe(
      tap(() => this.refreshProducts()) 
    );
  }

  deleteProduct(userId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/deleteUser/${userId}`).pipe(
      tap(() => {
        const updatedProducts = this.productsSubject.value.filter(product => product.userId !== userId);
        this.productsSubject.next(updatedProducts);
      })
    );
  }


  updateProductField(userId: string, field: string, value: any): Observable<product> {
    return this.http.put<product>(`${environment.apiUrl}/updateUser/${userId}`, { [field]: value }).pipe(
      tap(updatedProduct => {
        const updatedProducts = this.productsSubject.value.map(product =>
          product.userId === userId ? { ...product, [field]: value } : product
        );
        this.productsSubject.next(updatedProducts);
      })
    );
  }
  private refreshProducts() {
    this.getAllProducts().subscribe(); 
  }
}
