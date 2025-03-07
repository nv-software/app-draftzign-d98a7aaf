import { AfterViewInit, Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { UtilsService } from '../../service/utils.service';
@Component({
  selector: 'app-campain',
  standalone: true,
  templateUrl: './campain.component.html',
  styleUrl: './campain.component.css',
  imports: [MatIconModule],
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
}
