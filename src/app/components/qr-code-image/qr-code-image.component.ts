import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code-image',
  standalone: true,
  imports: [],
  templateUrl: './qr-code-image.component.html'
})
export class QrCodeImageComponent {

  /* I have declared the "qr_code_image_link" and "qr_code_image_description" as variable and I added the image link at "qr_code_image_link". */
  qr_code_image_link : string = "assets/images/image-qr-code.png";
  qr_code_image_description : string ="The image represents \"QR-Code-Scanner\"";

}
