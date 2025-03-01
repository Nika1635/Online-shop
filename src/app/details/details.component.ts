import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(public productid: ActivatedRoute, public api: ApiService){
    this.getId()
  }

  productId: any = ""
  productInfo: any = {} 
  productimage: any = []

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
}
