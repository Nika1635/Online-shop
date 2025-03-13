import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavbarComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';

  constructor(public api: ApiService) {
    this.loader()
  }

  

  public isLoading: any

  loader() {
    this.api.isLoading.subscribe( (data:boolean) => {
      this.isLoading = data
    } )
  }
}
