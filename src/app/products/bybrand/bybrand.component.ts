import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-bybrand',
  imports: [],
  templateUrl: './bybrand.component.html',
  styleUrl: './bybrand.component.css'
})
export class BybrandComponent {
  constructor(public api: ApiService){
    this.getBrands()
  }

  @Output() transport: EventEmitter<any> = new EventEmitter()

  brands: any = []

  getBrands(){
    this.api.brands().subscribe((data) => this.brands = data)
  }

  filterByBrands(item: string){
    this.transport.emit(item)
    console.log(item)
  }
}
