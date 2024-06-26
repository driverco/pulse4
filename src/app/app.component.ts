import { Component } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pulseAdmin';

  constructor(private translocoService: TranslocoService) {
  }

  switchLanguage(lang:string) {
    this.translocoService.setActiveLang(lang);
  }

}
