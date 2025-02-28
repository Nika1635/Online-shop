import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [ FormsModule ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  constructor(public api: ApiService){
    this.categories()
    this.getBrands()
  }

  @Output() transportcategorie: EventEmitter<any> = new EventEmitter()
  @Output() transport: EventEmitter<any> = new EventEmitter()
  @Output() directiontransport: EventEmitter<{ by: string; direction: string; min: string; max: string}> = new EventEmitter()

  min!: string;
  max!: string;
  categoriesarr: any = []
  brands: any = []
  sort: string = "Sort By"
  direction: string = "Direction"

  
  categories(){
    this.api.categories().subscribe((data) => this.categoriesarr = data)
  }

  categorietransport(id: number){
    this.transportcategorie.emit(id)
  }

  getBrands(){
    this.api.brands().subscribe((data) => this.brands = data)
  }

  filterByBrands(item: string){
    this.transport.emit(item)
  }
  
  sortBy(){
    this.directiontransport.emit({
      by: this.sort == "Sort By" ? '' : `&sort_by=${this.sort}`, 
      direction: this.direction == "Direction" ? '' : `&sort_direction=${this.direction}`,
      min: this.min == undefined || "" ? '' : `&price_min=${this.min}`,
      max: this.max == undefined || "" ? '' : `&price_max=${this.max}`,
    })
  }

}
