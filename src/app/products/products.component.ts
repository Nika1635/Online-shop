import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [ FormsModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(public api: ApiService){
    this.getCards()
    this.getBrands()
  }

  products: any = []
  brands: any = []
  search!: string;
  sort!: string;

  getCards(){
    this.api.getAllProducts(1).subscribe((data) => this.products = data)
  }

  getBrands(){
    this.api.brands().subscribe((data) => this.brands = data)
  }

  filterByBrands(brands: string){
    this.api.filterBrands(brands).subscribe((data) => this.products = data)
  }

  searchByName(){
    this.api.searchByName(this.search).subscribe((data) => this.products = data)
  }
}
