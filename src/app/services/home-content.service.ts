import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, shareReplay } from 'rxjs';
import { environment } from '../environments/environment';
import { HomeContent } from '../models/home-content-response';

@Injectable({
  providedIn: 'root'
})
export class HomeContentService {

  constructor(private client: HttpClient) {
  }
  public getHomeContent(): Observable<HomeContent> {
    let url = `${environment.apiUrl}/icerik`
    return this.client.get<HomeContent>(url).pipe(shareReplay(1))
  }
}
