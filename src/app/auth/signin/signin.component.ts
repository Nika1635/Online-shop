import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PostService } from '../../post.service';
import { CookieService } from 'ngx-cookie-service';
import { SubjectService } from '../../subject.service';


@Component({
  selector: 'app-signin',
  imports: [ RouterModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(public post: PostService, public cookie: CookieService, public subject: SubjectService, public router: Router){}


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
        this.router.navigate(["/"])
        setTimeout(() => {
          window.location.reload()
        }, 100)
      },
      error: (error) => {
        this.response = "Cant sign In"
      }
    })
  }
}
