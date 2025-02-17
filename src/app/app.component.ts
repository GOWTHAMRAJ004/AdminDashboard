import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, ProductComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AdminPanel';
}
