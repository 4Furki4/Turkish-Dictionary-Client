import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Kelime, Atasoz } from 'src/app/models/home-content-response';
const enterSlideInRight = trigger('enterSlideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-10%)' }),
    animate('750ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);
const enterSlideInLeft = trigger('enterSlideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(10%)' }),
    animate('750ms ease-out', style({ opacity: 1, transform: 'translateX(0%)' }))
  ])
])
@Component({
  selector: 'sozluk-daily-word-and-phrase',
  templateUrl: './daily-word-and-phrase.component.html',
  styleUrls: ['./daily-word-and-phrase.component.scss'],
  animations: [enterSlideInLeft, enterSlideInRight]
})
export class DailyWordAndPhraseComponent {
  constructor() {

  }
  @Input('kelime') word!: Kelime
  @Input('atasozu') phrase!: Atasoz;
}
