import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { product } from '../data-type';
import {FormsModule} from '@Angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  userId: string = '';
  products: product[] = [];
  allProducts: product[] = [];
  searchError: string | null = null;

  constructor(private productsService: ProductServiceService,private router: Router) {}

  ngOnInit(): void {
    this.productsService.products$.subscribe({
      next: (data) => {
        this.products = data;
        this.allProducts = data;
      },
      error: (error) => console.error('Error fetching products:', error)
    });

    // Initial fetch
    this.productsService.getAllProducts().subscribe();
  }

  findUser() {
    if (!this.userId) {
      this.products = this.allProducts;
      this.searchError = null;
      return;
    }

    const filteredProduct = this.allProducts.filter(product => product.userId === this.userId);

    if (filteredProduct.length > 0) {
      this.products = filteredProduct;
      this.searchError = null;
    } else {
      this.products = [];
      this.searchError = "Product not found.";
    }
  }

  deleteUser(userId: string) {
    this.productsService.deleteProduct(userId).subscribe(() => {
      this.products = this.products.filter(user => user.userId !== userId);
    });
  }

  editProduct(product: product) {
    this.router.navigate(['/edit-user', product.userId]); // Navigates to the edit page with the user ID
  }
  
}
