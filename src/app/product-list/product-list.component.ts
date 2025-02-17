
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
}) 
export class ProductListComponent implements OnInit {
  products:undefined| product[]
  constructor(private productsService: ProductServiceService) {
   
  } 
  ngOnInit():void{
      this.productsService.getAllProducts().subscribe((data)=>{
        console.warn(data);
          this.products = data
      })
  }
}

