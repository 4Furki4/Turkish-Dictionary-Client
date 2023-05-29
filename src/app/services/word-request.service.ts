import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';
import { WordResponse } from '../models/word-response';

@Injectable({
  providedIn: 'root'
})
export class WordRequestService {
  private readonly client = inject(HttpClient);
  requestWordMeaning = (word: string) =>
    this.client
      .get<WordResponse[]>(`${environment.apiUrl}/gts?ara=${word}`)
}