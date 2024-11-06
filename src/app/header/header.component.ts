import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get title() {
    return 'velum';
  }

  @Output() selectedHamb = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
    // Desactivar el desplazamiento automático en la navegación
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  hambClicked(clicked: string){
    this.closeHambMenu();
    this.selectedHamb.emit(clicked);
  }

  closeHambMenu() {
    const navbarDropdownElement = document.getElementById('navbarDropdown');
    if (navbarDropdownElement) {
      navbarDropdownElement.classList.remove('show');
    }
  }
  
  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
    this.closeHambMenu();
  }

}
