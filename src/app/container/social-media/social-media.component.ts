import { AfterViewInit, Component } from '@angular/core';
import { UtilsService } from '../../service/utils.service';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  constructor(private utilsService: UtilsService) {}

  openWhatsapp() {
    this.utilsService.openWhatsapp('')
  }
}
