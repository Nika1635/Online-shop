import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { blockGuard } from './block.guard';
import { CartComponent } from './cart/cart.component';
import { ifloggedGuard } from './iflogged.guard';
import { ProfileComponent } from './profile/profile.component';
import { RecoverComponent } from './auth/recover/recover.component';
import { PasswordresetComponent } from './auth/passwordreset/passwordreset.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "details/:id", component: DetailsComponent},
    {path: "auth/signin", component: SigninComponent, canActivate: [blockGuard]},
    {path: "auth/passwordreset", component: PasswordresetComponent, canActivate: [ifloggedGuard]},
    {path: "auth/recover", component: RecoverComponent, canActivate: [blockGuard]},
    {path: "auth/signup", component: SignupComponent, canActivate: [blockGuard]},
    {path: "cart", component: CartComponent, canActivate: [ifloggedGuard]},
    {path: "profile", component: ProfileComponent, canActivate: [ifloggedGuard]},
    {path: "**", component: NotfoundComponent, canActivate: [ifloggedGuard]}
];
