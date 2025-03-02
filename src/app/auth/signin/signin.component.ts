import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-signin',
  imports: [ RouterModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(public post: PostService){}


  public form: FormGroup = new FormGroup({
    email: new FormControl ("", [Validators.required, Validators.email]),
    password: new FormControl ("", [Validators.required, Validators.minLength(8)]),
  })

  response: string = ""

  formlog(){
    console.log(this.form)
    this.post.signIn(this.form.value).subscribe({
      next: (data) =>{
        console.log(data)
        this.response = "You loged in succesfully"
      },
      error: (error) => {
        this.response = "Cant sign In"
      }
    })
  }
}
