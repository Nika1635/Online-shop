import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostService } from '../../post.service';
import {CookieService} from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  imports: [ RouterModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(public post: PostService, public cookie: CookieService){
    
  }


  public form: FormGroup = new FormGroup({
    email: new FormControl ("", [Validators.required, Validators.email]),
    password: new FormControl ("", [Validators.required, Validators.minLength(8)]),
  })

  response: string = ""

  formlog(){
    this.post.signIn(this.form.value).subscribe({
      next: (data) =>{
        this.response = "You loged in succesfully"
        const response = data as { access_token: string };
        this.cookie.set("token", response.access_token);
        this.getLoginInfo()
      },
      error: (error) => {
        this.response = "Cant sign In"
      }
    })
  }

  information: any = {}

  getLoginInfo(){
    let header = new HttpHeaders({
      "Authorization": `Bearer ${this.cookie.get("token")}`
    })

    this.post.loginInfo(header).subscribe((data: any) =>{
      this.information = data
      this.cookie.set("info", data.id)
    })
  }
}
