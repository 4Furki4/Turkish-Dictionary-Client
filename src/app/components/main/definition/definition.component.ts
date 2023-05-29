import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, map, switchMap } from 'rxjs';
import { WordResponse } from 'src/app/models/word-response';
import { WordRequestService } from 'src/app/services/word-request.service';


//sliding animation
@Component({
  selector: 'sozluk-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
  animations: [
    trigger('sliding', [
      state('sliding', style({
        transform: 'translateX(-100%)'
      })),
      state('sliding-out', style({
        transform: 'translateX(100%)'
      }
      )),
      state('sliding-in', style({
        transform: 'translateX(0%)'
      }
      )),
      transition('void => sliding', animate(0)),
      transition('sliding => sliding-out', animate(250)),
    ])
  ]
})
export class DefinitionComponent implements OnInit {
  ngOnInit(): void {

  }
  private wordService: WordRequestService = inject(WordRequestService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private spinner: NgxSpinnerService = inject(NgxSpinnerService);
  anlamList: Array<string[]> = [];
  searchedWord !: string;
  word$: Observable<WordResponse[]> = this.activatedRoute.paramMap.pipe(
    map((param) => param.get('word')!),
    switchMap((word) => {
      if (word === this.searchedWord) { }
      return this.wordService.requestWordMeaning(word)
    }),
    map((httpResponse) => {
      this.spinner.show('scale', {
        type: 'ball-scale-multiple'
      })
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
      this.spinner.hide('scale', 250)
      return httpResponse;
    })
  );
}
