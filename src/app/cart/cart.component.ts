import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { PostService } from '../post.service';
import { Cart } from '../interface/cart';
import { Productinfo } from '../interface/productinfo';
import { error } from 'node:console';

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

  information: any = {}
  products!: any;
  productsDetails: any = []
  form: any = {}
  nocart!: boolean

  getCartInfo() {
    this.api.cartInfo().subscribe({
      next: (data: Cart) => {
        this.nocart = true
        this.information = data
        this.products = this.information.products  
        this.productsDetails = []
  
        this.products.forEach((element: any, index: any) => {
          this.api.getProductDetails(element.productId).subscribe((cardinfo: Productinfo) => {
            this.productsDetails.push({
              title: cardinfo.title,
              describtion: cardinfo.description,
              price: cardinfo.price.current,
              photo: cardinfo.thumbnail,
              quantity: this.products[index].quantity,
              id: cardinfo._id
            })
          })
        })
      },
  
      error: (error) => {
        this.nocart = false
        alert(`Error: ${error.error.error}`)
      }
    })
  }

  deleteItem(id: string) {
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.cookie.get("token")}`,
    });
  
    this.form = { id: id };
  
    this.post.deleteCartProduct(header, this.form).subscribe({
      next: () => {
        this.productsDetails = []
        this.getCartInfo()
        alert("Item deleted successfully")
      },
      error: (error) => {
        alert("Error deleting item")
      },
    })
  }

  removeCart(){
    this.post.removeCart(this.cookie.get("token")).subscribe({
      next: (data) => {
        console.log(data)
        this.productsDetails = []
      },
      error: (error) => {
      }
    })
  this.getCartInfo()
  }
}
