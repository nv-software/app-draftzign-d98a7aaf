import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app-draftzign';
  backgroundImages: string[] = [
    '../../assets/headers/menu/background-img.svg',
    '../../assets/headers/menu/background-img-lp.svg',
    '../../assets/headers/menu/background-img-social.svg',
    '../../assets/headers/menu/background-img-ecomm.svg',
    '../../assets/headers/menu/background-img-campain.svg',
  ];

  ngOnInit(): void {
    this.preloadImages();
  }

  preloadImages(): void {
    this.backgroundImages.forEach((imagePath) => {
      const img = new Image();
      img.src = imagePath;

      // Opcional: Verifique quando a imagem foi carregada
      img.onload = () => console.log(`Imagem pré-carregada: ${imagePath}`);
      img.onerror = () => console.error(`Erro ao carregar: ${imagePath}`);
    });
  }
}
