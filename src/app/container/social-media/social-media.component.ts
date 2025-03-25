import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UtilsService } from '../../service/utils.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, NgStyle, NgClass],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
})
export class SocialMediaComponent implements AfterViewInit {
  images = [
    { src: '../../../assets/social-media/first-iphone.svg', title: 'first-iphone' },
    { src: '../../../assets/social-media/second-iphone.svg', title: 'second-iphone' },
  ];

  @ViewChild(Carousel) carousel!: Carousel;

  responsiveOptions: any[] | undefined;
  ngAfterViewInit(): void {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  constructor(private utilsService: UtilsService) {}

  openWhatsapp() {
    this.utilsService.openWhatsapp('');
  }
}
