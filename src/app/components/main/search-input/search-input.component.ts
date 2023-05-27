import { Component, HostListener, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WordResponse } from 'src/app/models/word-response';
import { WordRequestService } from 'src/app/services/word-request.service';

@Component({
  selector: 'sozluk-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  constructor(private wordRequest: WordRequestService, private route: Router) { }
  @ViewChild("searchForm") searchForm!: NgForm;
  wordInput!: string;
  wordResponse !: Array<WordResponse>;
  async onSubmit() {

    this.route.navigate([`${this.wordInput}`])
  }
  @HostListener('window:keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent) {
    if (event.target instanceof HTMLInputElement) {
      // when word searched by pressing enter on input element, submit the form and change the focus so that input validation error doesn't appear when not focused
      this.onSubmit()
      event.target.blur()
      this.searchForm.reset()
    }
  }
  public get isInputValid(): boolean {
    let wordFiltered = this.wordInput?.trim()
    return wordFiltered?.length > 0 ? true : false;
  }
}
