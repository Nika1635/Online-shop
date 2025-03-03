import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PostService } from '../post.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(public cookie: CookieService, public post: PostService){}
  
  ngOnInit(): void {
    this.getLoginInfo()
  }

  navbar: boolean = false

  switch(){
    this.navbar = !this.navbar
  }

  information: any = {}

  logout(){
    this.cookie.delete("token")
  }

  getLoginInfo(){
    let header = new HttpHeaders({
      "Authorization": `Bearer ${this.cookie.get("token")}`
    })
    this.post.loginInfo(header).subscribe((data: any) =>{
      console.log(data)
      this.information = data
    })
  }

  
}
