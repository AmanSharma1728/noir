import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product';
import { Product } from '../../core/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private productService = inject(ProductService);

  products$: Observable<Product[]> = this.productService.getProducts();

  categories$: Observable<string[]> = this.productService.getCategories();

  filterCategory(category: string) {
    if (category === 'All') this.products$ = this.productService.getProducts();
    else this.products$ = this.productService.getProductsByCategory(category);
  }

  // ngOnInit() {
  //   this.productService.getProducts().subscribe({
  //     next: (data) => {
  //       this.products = data;
  //     },
  //   });
  // }
}
