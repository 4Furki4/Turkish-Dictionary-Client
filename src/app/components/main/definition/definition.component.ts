import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { WordErrorResponse } from 'src/app/models/word-error-response';
import { WordResponse } from 'src/app/models/word-response';
import { WordRequestService } from 'src/app/services/word-request.service';
const fadeIn = trigger('render', [
  state('onRendering', style({ opacity: 0, transform: 'translateX(5%)' })),
  state('onRender', style({ opacity: 1, transform: 'translateX(0%)' })),
  transition('onRendering => onRender', animate('750ms ease-in-out')),
])
const EnterFadeInTransition = trigger('enterFadeInTransition', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(5%)' }),
    animate('750ms ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' })),
  ])
])

//sliding animation
@Component({
  selector: 'sozluk-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
  animations: [fadeIn, EnterFadeInTransition]
})
export class DefinitionComponent implements OnInit {
  ngOnInit(): void {

  }

  private wordService: WordRequestService = inject(WordRequestService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  words !: WordResponse[];
  wordErrorResponse = new WordErrorResponse();
  anlamList: Array<string[]> = [];
  searchedWord = this.activatedRoute.paramMap.pipe(
    map((param) => param.get('word')!),
    switchMap((word) => {
      this.isRendering = true
      word = word.toLowerCase()
      return of(word)
    })).subscribe((word) => {
      this.wordService.requestWordMeaning(word).subscribe({
        next: (response: WordResponse[] | WordErrorResponse) => this.loadWordDefinition(response),
      })
    })
  isRendering: boolean = true;
  loadWordDefinition(response: WordResponse[] | WordErrorResponse) {
    if ((response as WordErrorResponse).error) {
      this.wordErrorResponse.error = (response as WordErrorResponse).error;
    }
    else {
      this.wordErrorResponse = new WordErrorResponse();
      response = response as WordResponse[]
      this.anlamList = new Array<string[]>()
      response.forEach((wordResponse) => {
        let anlamCount = parseInt(wordResponse.anlam_say, 10)
        let anlamOzellik !: string;
        let anlamOzellikListe = new Array<string>()
        for (let i = 0; i < anlamCount; i++) {
          if (wordResponse.anlamlarListe[i].ozelliklerListe)
            anlamOzellik = wordResponse.anlamlarListe[i].ozelliklerListe.map((ozellik) => ozellik.tam_adi).join(', ')
          anlamOzellikListe.push(anlamOzellik)
        }
        this.anlamList.push(anlamOzellikListe)
      })
      this.words = response
    }
    this.isRendering = false
  }
}
