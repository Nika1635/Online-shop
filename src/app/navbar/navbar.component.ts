import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { Logininfo } from '../interface/logininfo';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(public cookie: CookieService, public api: ApiService, public router: Router){}

  ngOnInit(): void {
    this.getLoginInfo();
  }

  navbar: boolean = false

  switch(){
    this.navbar = !this.navbar
  }

  information: any = {}

  logout(){
    this.router.navigate(["/"])
    setTimeout(() => {
      this.cookie.delete("token");
    }, 100);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  getLoginInfo(){
    this.api.loginInfo().subscribe({
      next: (data: Logininfo) =>{
        this.information = data
        console.log(data)
      },
      error: (error) => {
        if(error.status == 409){
          alert("your email is not verified")
          this.logout()
        }
      }
    })
  }

  hide(){
    this.navbar = false
  }
  
}
