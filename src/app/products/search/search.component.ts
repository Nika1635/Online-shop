import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [ FormsModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() transport: EventEmitter<any> = new EventEmitter()

  search!: string;

  searchByName(){
    this.transport.emit(this.search)
  }
}
