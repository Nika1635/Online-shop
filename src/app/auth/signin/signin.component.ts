import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [ RouterModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {


  public form: FormGroup = new FormGroup({
    email: new FormControl ("", [Validators.required, Validators.email]),
    password: new FormControl ("", [Validators.required, Validators.minLength(8)]),
  })

  signIn(){
    
  }
}
