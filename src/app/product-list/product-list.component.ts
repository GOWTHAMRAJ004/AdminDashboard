
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { product } from '../data-type';
import {FormsModule} from '@Angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
}) 
export class ProductListComponent implements OnInit {
  userId!:String;
  products:undefined| product[]
  constructor(private productsService: ProductServiceService) {
   
  } 
  ngOnInit():void{
      this.productsService.getAllProducts().subscribe((data)=>{
        console.warn(data);
          this.products = data;
      })
  }
  findUser() {
    this.productsService.findById(this.userId).subscribe({
      next: (data) => {
        console.warn(data);  
      },
      error: (error) => {
        console.error('Error fetching user data:', error);  
      }
    });
  }
  

}

