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
    productId: string = '';
    products: product[] = [];
    allProducts: product[] = [];
    searchError: string | null = null;

    constructor(private productsService: ProductServiceService,private router: Router) {}

    ngOnInit(): void {
      this.productsService.products$.subscribe({
        next: (data) => {
          this.products = data;
          console.warn(this.products);
          this.allProducts = data;
        },
        error: (error) => console.error('Error fetching products:', error)
      });

      
      this.productsService.getAllProducts().subscribe();
    }

    findUser() {
      if (!this.productId) {
        this.products = this.allProducts;
        this.searchError = null;
        return;
      }

      const filteredProduct = this.allProducts.filter(product => product.productId === this.productId);

      if (filteredProduct.length > 0) {
        this.products = filteredProduct;
        this.searchError = null;
      } else {
        this.products = [];
        this.searchError = "Product not found.";
      }
    }

    deleteUser(productId: string) {
      this.productsService.deleteProduct(productId).subscribe(() => {
        console.log(`User ${productId} deleted successfully`);
        this.productsService.getAllProducts().subscribe();
      },)
    }

    editProduct(product: product) {
      console.log(product.productId)
      this.router.navigate(['/edit-user', product.productId]); // Navigates to the edit page with the user ID
    }
    
  }
