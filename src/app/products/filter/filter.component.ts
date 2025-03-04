import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';
import { Categories } from '../../interface/categories';

@Component({
  selector: 'app-filter',
  imports: [ FormsModule ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit{
  constructor(public api: ApiService){}

  ngOnInit(): void {
    this.categories()
    this.getBrands()
  }

  @Output() transportcategorie: EventEmitter<any> = new EventEmitter()
  @Output() transport: EventEmitter<any> = new EventEmitter()
  @Output() directiontransport: EventEmitter<{ by: string; direction: string; min: string; max: string}> = new EventEmitter()
  @Output() allProductss: EventEmitter<any> = new EventEmitter()

  min!: string;
  max!: string;
  categoriesarr: any = []
  brands: any = []
  sort: string = "Sort By"
  direction: string = "Direction"

  allProducts(){
    this.allProductss.emit()
  }
  
  categories(){
    this.api.categories().subscribe((data: Categories[]) => this.categoriesarr = data)
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
