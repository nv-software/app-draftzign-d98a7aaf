import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
