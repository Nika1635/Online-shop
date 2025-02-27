import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-price',
  imports: [ FormsModule ],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {

  @Output() mintransport: EventEmitter<{ min: string; max: string }> = new EventEmitter()

  min!: string;
  max!: string;

  price(){
    this.mintransport.emit({ min: this.min, max: this.max })
  }

}
