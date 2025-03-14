import { AfterViewInit, Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { UtilsService } from '../../service/utils.service';
import { ArrowDownComponent } from '../../common/arrow-down/arrow-down.component';
@Component({
  selector: 'app-campain',
  standalone: true,
  templateUrl: './campain.component.html',
  styleUrl: './campain.component.css',
  imports: [MatIconModule, ArrowDownComponent],
})
export class CampainComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  constructor(private utilsService: UtilsService) {}

  openWhatsapp() {
    this.utilsService.openWhatsapp('')
  }

  scrollDown() {

    // const someScroll = window.screen.height - (window.screen.height * 0.3)

    document.getElementById('plan-services')?.scrollIntoView({behavior: 'smooth'})
  }
}
