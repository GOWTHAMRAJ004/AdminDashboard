import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const routes: Routes = [
    {path:'', component: AppComponent },
    { path: 'edit-user/:id', component: EditUserComponent },
    {path:'Home', component: HomeComponent },
    {path:'About', component: AboutComponent},
    {path:'user', component: ProductComponent}
];
