import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from './interface/categories';
import { Products } from './interface/products';
import { Logininfo } from './interface/logininfo';

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
    return this.api.get<Categories[]>(`https://api.everrest.educata.dev/shop/products/categories`)
  }

  brands(){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/brands`)
  }

  getProductDetails(id: string){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/id/${id}`)
  }

  getAllProducts(pages: any){
    return this.api.get<Products[]>(`https://api.everrest.educata.dev/shop/products/all?page_index=${pages}&page_size=15`)
  }

  loginInfo(data: any){
    return this.api.get<Logininfo>("https://api.everrest.educata.dev/auth", {headers: data})
  }

  cartInfo(data: any){
    return this.api.get("https://api.everrest.educata.dev/shop/cart", {headers: data})
  }
}
