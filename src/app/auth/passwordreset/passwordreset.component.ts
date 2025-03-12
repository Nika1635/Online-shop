import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../post.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-passwordreset',
  imports: [ReactiveFormsModule],
  templateUrl: './passwordreset.component.html',
  styleUrl: './passwordreset.component.css'
})
export class PasswordresetComponent {
  constructor(public post: PostService, public cookie: CookieService){
  }

  public form: FormGroup = new FormGroup({
    oldPassword: new FormControl ("", [Validators.required]),
    newPassword: new FormControl ("", [Validators.required, Validators.minLength(8)]),
  })

  resetpassword(){
    this.post.resetPassword(this.cookie.get("token"), this.form.value).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
