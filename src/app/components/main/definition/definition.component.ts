import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordResponse } from 'src/app/models/word-response';
import { WordRequestService } from 'src/app/services/word-request.service';

@Component({
  selector: 'sozluk-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  constructor(private requestWord: WordRequestService,
    private router: ActivatedRoute) { }

  word!: string;
  response!: WordResponse;

  ngOnInit(): void {
    this.router.paramMap.subscribe(async (param) => {
      this.word = param.get('word')!
      this.response = await this.requestWord.getWordMeaning(this.word);
      console.log(this.response);
    })
  }
}
