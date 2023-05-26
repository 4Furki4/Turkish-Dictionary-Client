import { Component, Input } from '@angular/core';
import { Kelime, Atasoz } from 'src/app/models/home-content-response';

@Component({
  selector: 'sozluk-daily-word-and-phrase',
  templateUrl: './daily-word-and-phrase.component.html',
  styleUrls: ['./daily-word-and-phrase.component.scss']
})
export class DailyWordAndPhraseComponent {
  constructor() {

  }
  @Input('kelime') words!: Kelime[]
  @Input('atasozu') phrases!: Atasoz[];
}
