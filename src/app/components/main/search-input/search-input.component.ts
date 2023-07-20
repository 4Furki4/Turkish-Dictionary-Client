import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WordResponse } from 'src/app/models/word-response';
const shadowAnimation = trigger('animateShadow', [
  state('valid', style({
    boxShadow: '0 0 0 0.2rem rgb(0,255,0)'
  })),
  state('invalid', style({
    boxShadow: '0 0 0 0.2rem rgb(255,0,0)'
  })),
  state('neutral', style({
    boxShadow: 'var(--card-shadow)'
  })),
  transition('valid <=> invalid, invalid <=> neutral, neutral <=> valid', [
    animate('250ms ease-out')
  ])
])
@Component({
  selector: 'sozluk-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  animations: [shadowAnimation]
})
export class SearchInputComponent {
  forbiddenWords : {
    [key: string]: string
  } = {
    'türkiyeli': 'türk',
  }
  constructor(private route: Router) {
  }
  @ViewChild("searchForm") searchForm!: NgForm;
  @ViewChild("inputEl") wordInputEl!: HTMLInputElement;
  wordInput!: string;
  wordResponse !: Array<WordResponse>;
  onSubmit() {
    if (this.isInputValueValid) {
      let cleansedWord = this.wordInput.toLowerCase().trim()
      if (this.forbiddenWords[cleansedWord]) {
        cleansedWord = this.forbiddenWords[cleansedWord]
      }
      this.route.navigate([`${cleansedWord}`])
      return true
    }
    else return false


  }
  @HostListener('window:keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent) {
    if (event.target instanceof HTMLInputElement) {
      // when word searched by pressing enter on input element,
      //submit the form and change the focus so that input validation error message and invalid input state doesn't appear when not focused
      if (!this.onSubmit()) { return }
      event.target.blur()
      this.searchForm.reset()
    }
  }
  public get isInputValueValid(): boolean {
    let wordFiltered = this.wordInput?.trim()
    return wordFiltered?.length > 0 ? true : false;
  }
}
