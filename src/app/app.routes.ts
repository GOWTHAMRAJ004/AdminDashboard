import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product', component: AdminPanelComponent },
    { path: 'edit-user/:id', component: EditUserComponent }
];
