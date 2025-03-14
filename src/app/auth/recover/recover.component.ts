import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-recover',
  imports: [ReactiveFormsModule],
  templateUrl: './recover.component.html',
  styleUrl: './recover.component.css'
})

export class RecoverComponent {
  constructor(public post: PostService){}

  public form: FormGroup = new FormGroup({
    email: new FormControl ("", [Validators.required, Validators.email]),
  })

  response: any = ""

  recover() { {
    console.log(this.form)
    this.post.recoveryEmail(this.form.value).subscribe({
      next: (data) => {
        console.log(data)
        this.response = "If we find the verified email in the database, we will send a recovery mail"
      },
      error: (error) => {
        console.log(error)
        this.response = "Cant send email"
      }
    });
  }
  }
}
