import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './container/contact/contact.component';
import { EcommerceComponent } from './container/ecommerce/ecommerce.component';
import { LandingPagesComponent } from './container/landing-pages/landing-pages.component';
import { SocialMediaComponent } from './container/social-media/social-media.component';
import { HomeComponent } from './container/home/home.component';
import { CampainComponent } from './container/campain/campain.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contato', component: ContactComponent },
    { path: 'e-commerce', component: EcommerceComponent },
    { path: 'home', component: HomeComponent },
    { path: 'landing-pages', component: LandingPagesComponent },
    { path: 'midias-sociais', component: SocialMediaComponent },
    { path: 'trafego-pago', component: CampainComponent },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'}),
    BrowserModule,
    FooterComponent,
    HeaderComponent,
    ContainerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
