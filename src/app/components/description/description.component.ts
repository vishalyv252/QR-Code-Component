import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html'
})
export class DescriptionComponent {

  /* I have declared the "description" as variable and I added some values inside that variable. */
  description : string = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";

}
