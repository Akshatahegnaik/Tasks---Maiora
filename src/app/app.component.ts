import { Component } from '@angular/core';

import { TranslationService } from './translation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translation-app';
  translation: string;

  constructor(private translationService: TranslationService) {
    this.translation = this.translationService.getTranslation('paragraph');
  }

  changeLanguage(language: string) {
    this.translationService.setLanguage(language);
    this.translation = this.translationService.getTranslation('paragraph');
  }
}
