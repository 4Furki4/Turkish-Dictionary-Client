import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, shareReplay } from 'rxjs';
import { environment } from '../environments/environment';
import { HomeContent } from '../models/home-content-response';

@Injectable({
  providedIn: 'root'
})
export class HomeContentService {

  constructor(private client: HttpClient) {
  }
  public getHomeContent(): Promise<HomeContent> {
    let url = `${environment.apiUrl}/icerik`
    let observableResponse = this.client.get<HomeContent>(url).pipe(shareReplay(1))
    return firstValueFrom(observableResponse);
  }
}
