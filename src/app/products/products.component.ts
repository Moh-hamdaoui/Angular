// products.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'; // Assurez-vous d'utiliser le bon chemin
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: Array<any> = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProduct().subscribe({
      next: data => {
        this.products = data;
      },
    });
  }

//ici cette fonction utilise la methode checkProduct pour changer la valeur de produit chkecked dans le back end
// et product.checked = !product.checked pour changer la valeur de produit cheked en front
  handleCheckProduct(product: any) {
    this.productService.checkProduct(product).subscribe({
      next: updatedProduct => {
        product.checked = !product.checked;
      },
    });
  }
}

