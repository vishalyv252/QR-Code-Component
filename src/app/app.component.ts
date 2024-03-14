import { QrCodeImageComponent } from './components/qr-code-image/qr-code-image.component';
import { Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { DescriptionComponent } from './components/description/description.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QrCodeImageComponent, TitleComponent, DescriptionComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {

}
