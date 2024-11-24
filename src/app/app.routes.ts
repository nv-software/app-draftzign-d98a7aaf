import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
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
