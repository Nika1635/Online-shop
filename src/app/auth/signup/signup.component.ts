import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostService } from '../../post.service';
import { error } from 'console';

@Component({
  selector: 'app-signup',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(public post: PostService){

  }

  public form: FormGroup = new FormGroup({
    firstName: new FormControl ("", [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    lastName: new FormControl ("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl ("", [Validators.required, Validators.email]),
    password: new FormControl ("", [Validators.required, Validators.minLength(8)]),
    phone: new FormControl ("+995", [Validators.required]),
    zipcode: new FormControl ("", [Validators.required]),
    address: new FormControl ("", [Validators.required]),
    age: new FormControl ("", [Validators.required]),
    avatar: new FormControl ("", [Validators.required]),
    gender: new FormControl ("", [Validators.required])
  })

  formlog(){
    console.log(this.form)
    this.post.signUp(this.form.value).subscribe({
      next: (data) =>{
        console.log(data)
        alert("Check your email for verification")
      },
      error: (error) => {
        alert("Cant sign up")
      }
    })
  }

}
