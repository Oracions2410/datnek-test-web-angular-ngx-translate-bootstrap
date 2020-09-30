import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {

  lang: any = [
    {
      notation: 'fr-FR',
      name: 'Francais'
    },
    {
      notation: 'en-EN',
      name: 'Englais'
    },
    {
      notation: 'nl-NL',
      name: 'Néerlandais'
    }
  ]

  userLang: any = [
    {
      notation: 'en-EN',
      name: 'Englais',
      speak: 3,
      write: 0,
      listen: 0
    },
    {
      notation: 'nl-NL',
      name: 'Néerlandais',
      speak: 0,
      write: 0,
      listen: 0
    }
  ]

  levels: any = [
    {
      number: 0,
      label: 'Pré-intermédiaire',
    },
    {
      number: 1,
      label: 'Intermédiaire',
    },
    {
      number: 2,
      label: 'Elementaire',
    },
    {
      number: 3,
      label: 'Courant',
    },
  ]

  activeLang: any = this.lang[0]

  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'fr-FR', 'nl-NL']);
    translate.setDefaultLang('en-EN');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/fr|fr-FR/) ? 'fr-FR' : 'en-US');

    // console.log('Browser Lang =', browserLang);
    //console.log('Navigator Lang =', navigator.language);
    //console.log('Current Lang =', translate.currentLang);
  }


  changeLang(langNotation) {
    console.log('---->', langNotation)
    this.translate.use(langNotation)
    this.activeLang = langNotation
    this.lang.map(lang => {
      if (lang.notation === langNotation) {
        this.activeLang = lang
      }
    })
  }



  showLevelLabel(levelNumber) {
    const level = this.levels.filter(level => level.number === levelNumber)
    //console.log(level[0])
    return (level && level[0] && level[0].number < 4) ? level[0].label.number : 0
  }


}