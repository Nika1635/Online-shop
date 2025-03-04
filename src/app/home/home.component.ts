import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{  
  constructor(public api: ApiService,){}

  ngOnInit(): void {
    this.getCards()
  }

  cards: any = []

  getCards(){
      this.api.getCardById(1, 10).subscribe((data) => {
        this.cards = data
      })
  }
}
