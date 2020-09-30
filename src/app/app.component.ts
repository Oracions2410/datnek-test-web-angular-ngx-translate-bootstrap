import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'datnek-test-web-angualar-js2';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'fr-FR', 'nl-NL']);
    translate.setDefaultLang('fr-FR');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/fr|fr-FR/) ? 'fr-FR' : 'en-US');

    console.log('Browser Lang =', browserLang);
    console.log('Navigator Lang =', navigator.language);
    console.log('Current Lang =', translate.currentLang);
  }

}
