import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(public api: ApiService){
    this.categories()
  }

  @Output() transportcategorie: EventEmitter<any> = new EventEmitter()

  categoriesarr: any = []

  categories(){
    this.api.categories().subscribe((data) => this.categoriesarr = data)
    console.log(this.categoriesarr)
  }

  categorietransport(id: number){
    this.transportcategorie.emit(id)
  }
}
