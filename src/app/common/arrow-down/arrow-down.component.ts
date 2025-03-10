import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-arrow-down',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './arrow-down.component.html',
  styleUrl: './arrow-down.component.css'
})
export class ArrowDownComponent {
  scrollDown() {

    const someScroll = window.screen.height - (window.screen.height * 0.3)

    window.scroll({behavior: 'smooth', top: someScroll})
  }
}
