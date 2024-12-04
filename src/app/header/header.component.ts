import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

type StringKeysOfWritable<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, BrowserModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  menuActive: string = '';
  ecommerceActive: string = '';
  campainActive: string = '';
  socialMEdiaActive: string = '';
  landPagesActive: string = '';
  currentPath: string = '';
  backgroundImg: string = '';
  titleText: string = '';
  titleTextFocus: string = '';
  titleTextFocusPlanText: string = '';
  isTyping: boolean = true;
  displayTitleTextFocus: string = '';
  displayTitleTextFocusPlanText: string = '';
  typingSpeed: number = 60;
  typingInterval: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.clearTyping(); // Limpa qualquer texto ou intervalo pendente
        this.currentPath = event.urlAfterRedirects;
        this.handleRouteChange(event.urlAfterRedirects);
      }
    });
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.clearTyping(); // Limpa intervalos ao destruir o componente
  }

  handleRouteChange(url: string): void {
    this.displayTitleTextFocus = '';
    this.displayTitleTextFocusPlanText = '';
    this.isTyping = true;

    switch (url) {
      case '/home':
        this.setBackgroundAndStartTyping(
          '../../assets/headers/menu/background-img.svg',
          'Ajude a sua empresa a ter uma',
          'presença profissional',
          ' no digital'
        );
        this.resetActives('menuActive');
        break;
      case '/landing-pages':
        this.setBackgroundAndStartTyping(
          '../../assets/headers/menu/background-img-lp.svg',
          'Converta visitantes em clientes com uma',
          'Landing Page!',
          ''
        );
        this.resetActives('landPagesActive');
        break;
      case '/midias-sociais':
        this.setBackgroundAndStartTyping(
          '../../assets/headers/menu/background-img-social.svg',
          'Maximize suas vendas com',
          'posts estratégicos no Instagram!',
          ''
        );
        this.resetActives('socialMEdiaActive');
        break;
      case '/e-commerce':
        this.setBackgroundAndStartTyping(
          '../../assets/headers/menu/background-img-ecomm.svg',
          'Transforme sua visão em uma',
          'loja online de sucesso!',
          ''
        );
        this.resetActives('ecommerceActive');
        break;
      case '/trafego-pago':
        this.setBackgroundAndStartTyping(
          '../../assets/headers/menu/background-img-campain.svg',
          'Nosso tráfego pago trouxe você até aqui?',
          'Faremos o mesmo pelo seu negócio!',
          ''
        );
        this.resetActives('campainActive');
        break;
      default:
        break;
    }
  }

  setBackgroundAndStartTyping(
    imagePath: string,
    title: string,
    focus: string,
    planText: string
  ): void {
    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
      this.backgroundImg = `url("${imagePath}")`; // Define o fundo somente após carregar
      this.titleText = title;
      this.setTypingText(focus, planText); // Inicia a digitação
    };

    img.onerror = () => {
      console.error(`Erro ao carregar a imagem: ${imagePath}`);
    };
  }

  resetActives(active: string): void {
    this.menuActive = active === 'menuActive' ? 'title-option-active' : '';
    this.ecommerceActive = active === 'ecommerceActive' ? 'title-option-active' : '';
    this.campainActive = active === 'campainActive' ? 'title-option-active' : '';
    this.socialMEdiaActive = active === 'socialMEdiaActive' ? 'title-option-active' : '';
    this.landPagesActive = active === 'landPagesActive' ? 'title-option-active' : '';
  }

  setTypingText(focus: string, planText: string): void {
    this.typeText(focus, 'displayTitleTextFocus', () => {
      this.typeText(planText, 'displayTitleTextFocusPlanText');
    });
  }

  typeText(
    text: string,
    target: StringKeysOfWritable<HeaderComponent>,
    callback?: () => void
  ): void {
    this.clearTyping();
    let index = 0;

    this.typingInterval = setInterval(() => {
      if (index < text.length) {
        this[target] += text[index];
        index++;
      } else {
        clearInterval(this.typingInterval);
        this.typingInterval = null;
        this.isTyping = false; // Oculta a barrinha de digitação
        if (callback) callback();
      }
    }, this.typingSpeed);
  }

  clearTyping(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
      this.typingInterval = null;
    }
  }
}
