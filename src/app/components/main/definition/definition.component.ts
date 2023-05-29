import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { WordResponse } from 'src/app/models/word-response';
import { WordRequestService } from 'src/app/services/word-request.service';

@Component({
  selector: 'sozluk-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  ngOnInit(): void {

  }
  private wordService: WordRequestService = inject(WordRequestService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  anlamList: Array<string[]> = [];
  word$: Observable<WordResponse[]> = this.activatedRoute.paramMap.pipe(
    map((param) => param.get('word')!),
    switchMap((word) => this.wordService.requestWordMeaning(word)),
    map((httpResponse) => {
      this.anlamList = new Array<string[]>()
      httpResponse.forEach((wordResponse, index) => {
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
      return httpResponse;
    })
  );
}
