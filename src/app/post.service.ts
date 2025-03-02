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

  loginInfo(data: any){
    return this.post.get("https://api.everrest.educata.dev/auth", {headers: data})
  }
}
