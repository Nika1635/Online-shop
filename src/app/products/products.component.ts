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
    this.getCards()
  }

  products: any = []


  getCards(){
    this.api.getAllProducts(1).subscribe((data) => this.products = data)
  }

  searchByName(event: string){
    this.api.searchByName(event).subscribe((data) => this.products = data)
  }

  categories(id: number){
    this.api.byCategory(id).subscribe((data) => this.products = data)
  }

  filterByBrands(brands: string){
    this.api.filterBrands(brands).subscribe((data) => this.products = data)
  }

  directiontransport(obj: any){
    this.api.filterall(obj).subscribe((data) => this.products = data)
  }
}
