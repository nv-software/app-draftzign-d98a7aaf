import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  backgroundClass: string = 'bg-blue'
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects == '/e-commerce') {
          this.backgroundClass = 'bg-black'
        } else {
          this.backgroundClass = 'bg-blue'
        }
      }
    });
  }
}
