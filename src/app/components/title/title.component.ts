import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html'
})
export class TitleComponent {

  /* I have declared the "title" as variable and I added some values inside that variable. */
  title : string = "Improve your front-end skills by building projects";

}
