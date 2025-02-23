import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import {FormsModule} from '@Angular/forms';
@Component({
  selector: 'app-edit-user',
  imports: [FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  productId!: string;
  editField: string = '';
  editValue: any = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    console.warn(this.productId);
  }

  saveEdit() {
    if (this.editField && this.editValue !== '') {
      console.warn(this.editField);
      console.warn(this.editValue);
      this.productService.updateProductField(this.productId, this.editField, this.editValue).subscribe(() => {
        this.productService.getAllProducts().subscribe();
        this.router.navigate(['/product']); 
      });
    }
  }

  cancelEdit() {
    this.router.navigate(['/product']); 
}
}
