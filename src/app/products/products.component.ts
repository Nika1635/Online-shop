import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-products',
  imports: [ FormsModule, SearchComponent, FilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(public api: ApiService){
    this.getCards(this.currentpage)
  }

  products: any = []
  pages:number[] = []
  pageSize: number = 15
  currentpage: number = 1

  pagesize(infoget: any){
    this.products = infoget

    let pageQuantity = Math.ceil(infoget.total / infoget.limit) 
    
    this.pages = []
    for(let i = 1; i <= pageQuantity; i++) {
      this.pages.push(i)
    }
    
  }

  next(){
    this.getCards(this.currentpage + 1)
    console.log(this.currentpage)
  }

  prev(){
    this.currentpage = this.currentpage - 1
  }

  getCards(thispage: number){
    this.api.getAllProducts(thispage).subscribe((data) => {
      this.products = data
      this.pagesize(data)
    })
  }

  searchByName(event: string){
    this.api.searchByName(event).subscribe((data) => {
      this.products = data
      this.pagesize(data)
    })
  }

  filterByBrands(brands: string){
    this.api.filterBrands(brands).subscribe((data) => {
      this.products = data
      this.pagesize(data)
    })
  }

  categories(id: number){
    this.api.byCategory(id).subscribe((data) => this.products = data)
  }

  directiontransport(obj: any){
    this.api.filterall(obj).subscribe((data) => {
      this.products = data
      this.pagesize(data)
    })
  }
}
