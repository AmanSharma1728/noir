import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //HttpClient will talk to the backend
  private http = inject(HttpClient);

  //backend url
  private apiUrl = 'http://localhost:3000/api';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/products');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/products/' + id);
  }

  getCategories() {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  getProductsByCategory(category: string) {
    return this.http.get<Product[]>(`${this.apiUrl}/products/category/${category}`);
  }

  addProduct(productData: any) {
    return this.http.post(`${this.apiUrl}/products`, productData);
  }
}
