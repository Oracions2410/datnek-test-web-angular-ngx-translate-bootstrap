import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

import { FormBuilder, FormGroup } from '@angular/forms'


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

  fetchLang: any = []

  activeLang: any = this.lang[0]

  form: FormGroup

  constructor(
    public translate: TranslateService,
    private languageService: LanguageService,
    private formBuilder: FormBuilder
  ) {

    this.form = this.formBuilder.group({
      name: [''],
      speak: [''],
      write: [''],
      listen: ['']
    })

    translate.addLangs(['en-US', 'fr-FR', 'nl-NL']);
    translate.setDefaultLang('en-EN');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/fr|fr-FR/) ? 'fr-FR' : 'en-US');

    // console.log('Browser Lang =', browserLang);
    //console.log('Navigator Lang =', navigator.language);
    //console.log('Current Lang =', translate.currentLang);
  }

  ngOnInit() {
    this.languageService.getLanguages().subscribe((response: any[]) => {
      this.fetchLang = response.languages
      console.log(this.fetchLang)
    })
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

  onSubmit() {
    let formData: any = new FormData()
    formData.append('name', this.form.get('name').value)
    formData.append('speak', this.form.get('speak').value)
    formData.append('write', this.form.get('write').value)
    formData.append('listen', this.form.get('listen').value)

    this.languageService.postLanguage(formData).subscribe(response => {
      console.log(response)
    })
  }

}