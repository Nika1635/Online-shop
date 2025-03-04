import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  constructor(public productid: ActivatedRoute, public api: ApiService){}

  ngOnInit(): void{
    this.getId()
  }


  productId: any = ""
  productInfo: any = {} 
  productimage: any = []
  photoarrindex: number = 1

  getId(){
    this.productid.params.subscribe((data) =>{
      this.productId = data
    })

    this.api.getProductDetails(this.productId.id).subscribe((data) => {
      this.productInfo = data
      this.productimage = this.productInfo.images
      console.log(this.productInfo)
    })
  }

  next(){
    if(this.photoarrindex === this.productimage.length){
      this.photoarrindex = 1
    } else {
      this.photoarrindex++
    }
  }

  previous(){
    if(this.photoarrindex === 1){
      this.photoarrindex = this.productimage.length
    } else {
      this.photoarrindex--
    }
  }
}
