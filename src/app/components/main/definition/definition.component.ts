import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { WordResponse } from 'src/app/models/word-response';
import { WordRequestService } from 'src/app/services/word-request.service';
const fadeIn = trigger('render', [
  state('onRendering', style({ opacity: 0, transform: 'translateX(-100%)' })),
  state('onRender', style({ opacity: 1, transform: 'translateX(0%)' })),
  transition('onRendering => onRender', animate('1000ms ease-in-out'))
])

//sliding animation
@Component({
  selector: 'sozluk-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
  animations: [fadeIn]
})
export class DefinitionComponent implements OnInit {
  ngOnInit(): void {

  }
  private wordService: WordRequestService = inject(WordRequestService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  anlamList: Array<string[]> = [];
  searchedWord !: string;
  isRendering: boolean = true;
  word !: WordResponse[];

  word$: Observable<WordResponse[]> = this.activatedRoute.paramMap.pipe(
    map((param) => param.get('word')!),
    switchMap((word) => {
      word = word.toLowerCase()
      this.searchedWord = this.searchedWord?.toLowerCase()
      if (word === this.searchedWord) { }
      return this.wordService.requestWordMeaning(word)
    }),
    map((httpResponse) => {
      this.anlamList = new Array<string[]>()
      httpResponse.forEach((wordResponse, index) => {
        this.searchedWord = wordResponse.madde
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
      this.isRendering = false
      return httpResponse;
    })
  );
}
