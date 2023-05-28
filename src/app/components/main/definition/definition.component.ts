import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { WordRequestService } from 'src/app/services/word-request.service';

@Component({
  selector: 'sozluk-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent {
  constructor(private wordService: WordRequestService, private router: ActivatedRoute) {
  }
  word$ = this.router.paramMap.pipe(
    map((param) => param.get('word')!),
    switchMap((word) => this.wordService.getWordMeaning(word))
  );

}
