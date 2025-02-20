import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProductComponent } from '../product/product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  imports: [NavBarComponent, ProductComponent, ProductListComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

}
