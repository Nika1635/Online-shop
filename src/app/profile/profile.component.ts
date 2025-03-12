import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { Logininfo } from '../interface/logininfo';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  constructor(public cookie: CookieService, public api: ApiService){}
  ngOnInit(): void {
    this.getLoginInfo()
  }

  information: any;

  getLoginInfo(){
    this.api.loginInfo().subscribe((data: Logininfo) =>{
      this.information = data
      console.log(data)
    })
  }
}
