import {
  AfterViewInit,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  NavigationEnd,
} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { UtilsService } from '../service/utils.service';
import { ArrowDownComponent } from '../common/arrow-down/arrow-down.component';

type StringKeysOfWritable<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, BrowserModule, MatIconModule, ArrowDownComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush,
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
  footerText: string = '';
  typingSpeed: number = 60;
  typingInterval: any;
  isMobile: boolean = false;
  isMenuOpen: boolean = false;
  constructor(private router: Router, private utilsService: UtilsService) {}

  openWhatsapp() {
    this.utilsService.openWhatsapp('');
  }
  get getIsMobile() {
    return this.isMobile;
  }

  openMenu() {
    const sidenav = document.getElementById('sidenav');

    if (!sidenav) return;

    sidenav.classList.add('sidenav');
    sidenav.classList.remove('hidden-sidenav');

    sidenav.style.display = 'flex';
  }

  closeMenu() {
    const sidenav = document.getElementById('sidenav');

    if (!sidenav) return;

    sidenav.classList.add('hidden-sidenav');
    sidenav.classList.remove('sidenav');

    sidenav.style.display = 'none';
  }

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
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

  checkScreenSize() {
    this.isMobile = window.innerWidth > 1091;
  }

  handleRouteChange(url: string): void {
    this.displayTitleTextFocus = '';
    this.displayTitleTextFocusPlanText = '';
    this.isTyping = true;

    switch (url) {
      case '/home':
        this.footerText =
          'selecione uma de nossas soluções abaixo e saiba mais';
        this.setBackgroundAndStartTyping(
          '../../assets/headers/menu/background-img.svg',
          'Ajude a sua empresa a ter uma',
          'presença profissional ',
          'no digital'
        );
        this.resetActives('menuActive');
        break;
      case '/landing-pages':
        this.footerText =
          'Para seu site/e-commerce ou sua marca que deseja aparecer no mercado digital que mais cresce atualmente.';
        this.setBackgroundAndStartTyping(
          '../../assets/headers/menu/background-img-lp.svg',
          'Converta visitantes em clientes com uma',
          'Landing Page!',
          ''
        );
        this.resetActives('landPagesActive');
        break;
      case '/midias-sociais':
        this.footerText = 'Sua empresa está “invisivel” no Instagram?';
        this.setBackgroundAndStartTyping(
          '../../assets/headers/menu/background-img-social.svg',
          'Maximize suas vendas com',
          'posts estratégicos no Instagram!',
          ''
        );
        this.resetActives('socialMEdiaActive');
        break;
      case '/e-commerce':
        this.footerText =
          'Venha para o digital e perceba os benefícios de uma loja virtual';
        this.setBackgroundAndStartTyping(
          '../../assets/headers/menu/background-img-ecomm.svg',
          'Transforme sua visão em uma',
          'loja online de sucesso!',
          ''
        );
        this.resetActives('ecommerceActive');
        break;
      case '/trafego-pago':
        this.footerText = 'Vendas em alta com os anúncios certos!';
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
    this.menuActive = active === 'menuActive' ? 'nav-link-active' : '';
    this.ecommerceActive =
      active === 'ecommerceActive' ? 'nav-link-active' : '';
    this.campainActive = active === 'campainActive' ? 'nav-link-active' : '';
    this.socialMEdiaActive =
      active === 'socialMEdiaActive' ? 'nav-link-active' : '';
    this.landPagesActive =
      active === 'landPagesActive' ? 'nav-link-active' : '';
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
