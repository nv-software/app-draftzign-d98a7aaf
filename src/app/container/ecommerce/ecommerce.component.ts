import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UtilsService } from '../../service/utils.service';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css',
})
export class EcommerceComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  constructor(private utilsService: UtilsService) {}

  openWhatsapp() {
    this.utilsService.openWhatsapp('')
  }
}
