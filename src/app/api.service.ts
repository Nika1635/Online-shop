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

  filterBrands(brand: string){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/brand/${brand}?page_index=1&page_size=50`)
  }

  searchByName(keyword: string){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/search?page_size=15&keywords=${keyword}`)
  }

  byCategory(category: number){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50&category_id=${category}`)
  }

  filterall(object: any){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50${object.direction}${object.by}${object.min}${object.max}`)
  }

  categories(){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/categories`)
  }

  brands(){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/brands`)
  }

  getAllProducts(pages: any){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/all?page_index=${pages}&page_size=10`)
  }
}
