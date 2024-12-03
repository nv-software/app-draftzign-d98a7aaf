import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Tipo auxiliar para garantir que o método `typeText` só aceite chaves que referenciem strings.
 */
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
export class HeaderComponent implements OnInit, AfterViewInit {
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
  isTyping:boolean=true
  displayTitleText: string = '';
  displayTitleTextFocus: string = '';
  displayTitleTextFocusPlanText: string = '';
  typingSpeed: number = 60; // Velocidade de digitação (ms por letra)

  constructor(private router: Router) {}

  // get getBackgroundImg() {
  //   return this.backgroundImg;
  // }

  ngOnInit(): void {
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.urlAfterRedirects;
        this.isTyping = true;
        switch (event.urlAfterRedirects) {
          case '/home':
            this.backgroundImg = 'url("../../assets/headers/menu/background-img.svg")';
            this.titleText='Ajude a sua empresa a ter uma'
            this.setTypingText(
              'presença profissional',
              ' no digital'
            );
            this.resetActives('menuActive');
            break;
          case '/landing-pages':
            this.backgroundImg = 'url("../../assets/headers/menu/background-img-lp.svg")';
            this.titleText='Converta visitantes em clientes com uma'
            this.setTypingText(
              'Landing Page!',
              ''
            );
            this.resetActives('landPagesActive');
            break;
          case '/midias-sociais':
            this.backgroundImg = 'url("../../assets/headers/menu/background-img-lp.svg")';
            this.titleText='Maximize suas vendas com'
            this.setTypingText(    
              'posts estratégicos no Instagram!',
              ''
            );
            this.resetActives('socialMEdiaActive');
            break;
          case '/e-commerce':
            this.backgroundImg = 'url("../../assets/headers/menu/background-img-ecomm.svg")';
            this.titleText='Transforme sua visão em uma'
            this.setTypingText(
              'loja online de sucesso!',
              ''
            );
            this.resetActives('ecommerceActive');
            break;
          case '/trafego-pago':
            this.backgroundImg = 'url("../../assets/headers/menu/background-img-campain.svg")';
            this.titleText='Nosso tráfego pago trouxe você até aqui?'
            this.setTypingText(
              'Faremos o mesmo pelo seu negócio!',
              ''
            );
            this.resetActives('campainActive');
            break;
          default:
            break;
        }
      }
    });
  }

  ngAfterViewInit(): void {}

  resetActives(active: string) {
    this.menuActive = active === 'menuActive' ? 'title-option-active' : '';
    this.ecommerceActive = active === 'ecommerceActive' ? 'title-option-active' : '';
    this.campainActive = active === 'campainActive' ? 'title-option-active' : '';
    this.socialMEdiaActive = active === 'socialMEdiaActive' ? 'title-option-active' : '';
    this.landPagesActive = active === 'landPagesActive' ? 'title-option-active' : '';
  }

  setTypingText(focus: string, planText: string) {
    this.displayTitleTextFocus = '';
    this.displayTitleTextFocusPlanText = '';

      this.typeText(focus, 'displayTitleTextFocus', () => {
        this.typeText(planText, 'displayTitleTextFocusPlanText');

    });
  }

  typeText(
    text: string,
    target: StringKeysOfWritable<HeaderComponent>,
    callback?: () => void
  ) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        this[target] += text[index];
        index++;
      } else {
        this.isTyping = false;
        clearInterval(interval);
        if (callback) callback();
      }
    }, this.typingSpeed);
  }
}
