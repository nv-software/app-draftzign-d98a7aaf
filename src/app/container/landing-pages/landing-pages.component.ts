import { AfterViewInit, Component } from '@angular/core';
import { UtilsService } from '../../service/utils.service';

@Component({
  selector: 'app-landing-pages',
  standalone: true,
  imports: [],
  templateUrl: './landing-pages.component.html',
  styleUrl: './landing-pages.component.css'
})
export class LandingPagesComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  constructor(private utilsService: UtilsService) {}

  openWhatsapp() {
    this.utilsService.openWhatsapp('')
  }
}
