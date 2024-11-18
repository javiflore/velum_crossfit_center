import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Output() selectedPage = new EventEmitter<string>();

  email = 'mail@mail.com';

  avisosClicked(event: string){
    this.selectedPage.emit(event);
  }
}
