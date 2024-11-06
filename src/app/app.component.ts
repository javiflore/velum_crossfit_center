import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'velum_crossfit_center';

  selectedPage = 'inicio';
  
  viewClicked(event: string){
    this.selectedPage = event;
    this.scrollUp();
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }
}
