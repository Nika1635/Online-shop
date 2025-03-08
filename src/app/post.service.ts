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

  createCart(body: any, form: any){
    return this.post.post("https://api.everrest.educata.dev/shop/cart/product", form, { headers: body })
  }

  patchCart(body: any, form: any) {
    return this.post.patch("https://api.everrest.educata.dev/shop/cart/product", form, { headers: body } )}
}
