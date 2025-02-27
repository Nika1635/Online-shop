import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "details", component: DetailsComponent}
];
