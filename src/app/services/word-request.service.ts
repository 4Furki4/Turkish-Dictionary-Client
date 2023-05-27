import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, firstValueFrom } from 'rxjs';
import { WordResponse } from '../models/word-response';

@Injectable({
  providedIn: 'root'
})
export class WordRequestService {

  constructor(private client: HttpClient) {
  }
  getWordMeaning(word: string): Promise<WordResponse> {
    let url = `${environment.apiUrl}/gts?ara=${word}`
    let observableResponse = this.client.get<WordResponse>(url);
    return firstValueFrom(observableResponse)
  }
}