import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
// on fait l'injection de service httpClient pour pouvoir utiliser
  constructor(private http: HttpClient) {}

//
  getProduct(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:8089/products');
  }

  checkProduct(product: any): Observable<any> {
    return this.http.patch(`http://localhost:8089/products/${product.id}`, { checked: !product.checked });
  }

}
