import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(public post: HttpClient) {}

  signUp(body: any){
    return this.post.post("https://api.everrest.educata.dev/auth/sign_up", body)
  }

  signIn(body: any){
    return this.post.post("https://api.everrest.educata.dev/auth/sign_in", body)
  }

  createCart(form: any){
    return this.post.post("https://api.everrest.educata.dev/shop/cart/product", form)
  }

  patchCart(form: any) {
    return this.post.patch("https://api.everrest.educata.dev/shop/cart/product", form )
  }

  deleteCartProduct(body: any, form: any){
    return this.post.delete("https://api.everrest.educata.dev/shop/cart/product", { headers: body, body: form})
  }

  recoveryEmail(form: any){
    return this.post.post("https://api.everrest.educata.dev/auth/recovery", form)
  }

  resetPassword(token: string, form: any){
    return this.post.patch("https://api.everrest.educata.dev/auth/change_password", {headers: token, body: form})
  }
}
