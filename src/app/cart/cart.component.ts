import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public api: ApiService, public cookie: CookieService, public post: PostService){
    this.getCartInfo()
  }

  information: any;
  form: any = {}

  getCartInfo(){
        let header = new HttpHeaders({
          "Authorization": `Bearer ${this.cookie.get("token")}`
        })
        this.api.cartInfo(header).subscribe({
          next: (data) => {
            this.information = data
            console.log(this.information)
          },

          error: (error) =>{
            
          }        
    })

    this.information
  }

  deleteItem(id: string){
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.cookie.get("token")}`,
    })
    this.form = {
      id: id,
    }
    console.log(this.form)
    this.post.deleteCartProduct(header, this.form).subscribe({
      next: () => {

      }
    })
    this.getCartInfo()
  }
}
