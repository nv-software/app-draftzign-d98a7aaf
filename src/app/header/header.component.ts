import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    BrowserModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuActive:string=''
  ecommerceActive:string=''
  campainActive:string=''
  socialMEdiaActive:string=''
  landPagesActive:string=''
  currentPath:string=''
  backgroundImg:string=''
  titleText:string=''
  titleTextFocus:string=''
  titleTextFocusPlanText:string=''
  constructor(private router: Router ){}


  get getBackgroundImg(){
    console.log(this.backgroundImg)
    return this.backgroundImg
  }

  ngOnInit(): void {
    // Escuta as mudanças de rota
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.urlAfterRedirects;
       switch (event.urlAfterRedirects) {
        case '/home':
          this.backgroundImg= 'url("../../assets/headers/menu/background-img.svg")'
          this.titleText='Ajude a sua empresa a ter uma'
          this.titleTextFocusPlanText=' no digital'
          this.titleTextFocus='presença profissional'
          this.menuActive='title-option-active'
          this.ecommerceActive=''
          this.campainActive=''
          this.socialMEdiaActive=''
          this.landPagesActive=''
          break;
          case '/landing-pages':
            this.backgroundImg= 'url("../../assets/headers/menu/background-img-lp.svg")'
            this.titleText='Converta visitantes em clientes com uma'
            this.titleTextFocus='Landing Page!'
            this.titleTextFocusPlanText=''
            this.menuActive=''
            this.ecommerceActive=''
            this.campainActive=''
            this.socialMEdiaActive=''
            this.landPagesActive='title-option-active'          
          break;
          case '/midias-sociais':
            this.backgroundImg= 'url("../../assets/headers/menu/background-img-lp.svg")'
            this.titleText='eu gostaria de ter o texto para'
            this.titleTextFocus='Mídias Sociais!'
            this.titleTextFocusPlanText=' seria legal'
            this.menuActive=''
            this.ecommerceActive=''
            this.campainActive=''
            this.socialMEdiaActive='title-option-active'
            this.landPagesActive=''          
          break;
          case '/e-commerce':
            this.backgroundImg= 'url("../../assets/headers/menu/background-img-ecomm.svg")'
            this.titleText='Transforme sua visão em uma'
            this.titleTextFocus='loja online de sucesso!'
            this.titleTextFocusPlanText=''
            this.menuActive=''
            this.ecommerceActive='title-option-active'
            this.campainActive=''
            this.socialMEdiaActive=''
            this.landPagesActive=''          
          break;
          case '/trafego-pago':
            this.backgroundImg= 'url("../../assets/headers/menu/background-img-ecomm.svg")'
            this.titleText='eu gostaria de ter o texto para'
            this.titleTextFocus='Campanhas'
            this.titleTextFocusPlanText=' de sucesso parceiro'
            this.menuActive=''
            this.ecommerceActive=''
            this.campainActive='title-option-active'
            this.socialMEdiaActive=''
            this.landPagesActive=''          
          break;       
        default:
          break;
       }
      }
    });
   
  }

}
