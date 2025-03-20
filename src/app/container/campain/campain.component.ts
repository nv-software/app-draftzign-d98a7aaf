import { AfterViewInit, Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { UtilsService } from '../../service/utils.service';
import { ArrowDownComponent } from '../../common/arrow-down/arrow-down.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-campain',
  standalone: true,
  templateUrl: './campain.component.html',
  styleUrl: './campain.component.css',
  imports: [MatIconModule, ArrowDownComponent,NgbCarouselModule],
  providers: [NgbCarouselConfig],

})
export class CampainComponent implements AfterViewInit {
  showNavigationArrows = true;
	showNavigationIndicators = true;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngAfterViewInit(): void {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  constructor(
    private utilsService: UtilsService,
    config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
		config.interval = 0
  }

  openWhatsapp() {
    this.utilsService.openWhatsapp('')
  }

  scrollDown() {

    // const someScroll = window.screen.height - (window.screen.height * 0.3)

    document.getElementById('plan-services')?.scrollIntoView({behavior: 'smooth'})
  }
}
