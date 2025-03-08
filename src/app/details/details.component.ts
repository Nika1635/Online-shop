import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { PostService } from '../post.service';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  constructor(public productid: ActivatedRoute, public api: ApiService, public post: PostService, public cookie: CookieService){}

  ngOnInit(): void{
    this.getId()
  }


  productId!: any
  productInfo: any = {}
  productimage: any = []
  photoarrindex: number = 1
  quantity: number = 1
  message!: string;
  
  form: any = {}
  
  getId() {
    this.productid.params.subscribe((data) => {
      this.productId = data
      this.form = {
        id: this.productId.id,
        quantity: this.quantity
      }
      console.log(this.form)
    })
  
    this.api.getProductDetails(this.productId.id).subscribe((data) => {
      this.productInfo = data
      this.productimage = this.productInfo.images
    })
  }

  postCart(){
    this.getId()
    console.log()
    let header = new HttpHeaders({
        Authorization: `Bearer ${this.cookie.get("token")}`,
    })
  
    this.post.createCart(header, this.form).subscribe({
      next: () => {
        this.message = "succesfully added to cart"
      },
      error: (erro) => {
        this.post.patchCart(header, this.form).subscribe({
          next: () => {
            this.message = "succesfully added to cart"
          },
          error: (erro) => {
            this.message = "out of stock"
          }
        })
      }
    })
  }
  
  next() {
    if (this.photoarrindex === this.productimage.length) {
      this.photoarrindex = 1
    } else {
      this.photoarrindex++
    }
  }
  
  previous() {
    if (this.photoarrindex === 1) {
      this.photoarrindex = this.productimage.length
    } else {
      this.photoarrindex--
    }
  }
}