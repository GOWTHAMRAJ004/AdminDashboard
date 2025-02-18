import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductServiceService } from '../product-service.service';
import {FormsModule} from '@Angular/forms';

@Component({
  selector: 'app-product',
  imports: [ FormsModule ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: product[] = [];
  newProduct: product = {
    userId: '',
    name: '',
    address: '',
    creditPoints: 0,
    phoneNumber: '', 
  };

constructor (private productsService :ProductServiceService){
}
submitForm() {
  this.productsService.addProduct(this.newProduct).subscribe({
    next: (response) => {
      console.log("Product created successfully:", response);
      this.resetForm(); 
    },
    error: (error) => {
      console.error("Error creating product:", error);
    }
  });
}

resetForm() {
  this.newProduct = {
    userId: '',
    name: '',
    address: '',
    creditPoints: 0,
    phoneNumber: '',
  };
}


}
