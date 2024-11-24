import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    // RouterModule.forRoot(routes),
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
