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
  userId!: string;
  editField: string = '';
  editValue: any = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
  }

  saveEdit() {
    if (this.editField && this.editValue !== '') {
      this.productService.updateProductField(this.userId, this.editField, this.editValue).subscribe(() => {
        this.router.navigate(['/home']); 
      });
    }
  }

  cancelEdit() {
    this.router.navigate(['/home']); 
}
}
