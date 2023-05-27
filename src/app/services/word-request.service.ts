import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, firstValueFrom, map } from 'rxjs';
import { WordResponse } from '../models/word-response';

@Injectable({
  providedIn: 'root'
})
export class WordRequestService {
  constructor(private client: HttpClient) { }
  getWordMeaning = (word: string) =>
    this.client
      .get<WordResponse[]>(`${environment.apiUrl}/gts?ara=${word}`)
}