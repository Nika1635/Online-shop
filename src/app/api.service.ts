import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public api: HttpClient) {}

  getCardById(index: number, size: number){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/all?page_index=${index}&page_size=${size}`)
  }

  getAllProducts(index: number){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/all?page_index=${index}&page_size=15`)
  }

  brands(){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/brands`)
  }

  filterBrands(brand: string){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/brand/${brand}?page_index=1&page_size=50`)
  }

  searchByName(keyword: string){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/search?page_size=50&keywords=${keyword}`)
  }

  sortBy(rating: string){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50&sort_by=${rating}`)
  }

  byCategory(category: number){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50&category_id=${category}`)
  }

  categories(){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/categories`)
  }

  minmax(min:number, max:number){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50&price_min=${min}&price_max=${max}`)
  }
}
