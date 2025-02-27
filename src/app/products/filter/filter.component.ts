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

  @Output() mintransport: EventEmitter<{ min: string; max: string }> = new EventEmitter()
  @Output() transportcategorie: EventEmitter<any> = new EventEmitter()
  @Output() transport: EventEmitter<any> = new EventEmitter()

  min!: string;
  max!: string;
  categoriesarr: any = []
  brands: any = []

  price(){
    this.mintransport.emit({ min: this.min, max: this.max })
  }
  
  categories(){
    this.api.categories().subscribe((data) => this.categoriesarr = data)
    console.log(this.categoriesarr)
  }

  categorietransport(id: number){
    this.transportcategorie.emit(id)
  }

  getBrands(){
    this.api.brands().subscribe((data) => this.brands = data)
  }

  filterByBrands(item: string){
    this.transport.emit(item)
    console.log(item)
  }

}
