import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Logininfo } from '../interface/logininfo';
import { info } from 'console';

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
    this.cookie.set("token", "")
    this.router.navigate(["/"])
  }

  getLoginInfo(){
    this.api.loginInfo().subscribe((data: Logininfo) =>{
      this.information = data
    })
  }

  
}
