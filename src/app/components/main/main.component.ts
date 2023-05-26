import { Component, OnInit } from '@angular/core';
import { HomeContentService } from 'src/app/services/home-content.service';

@Component({
  selector: 'sozluk-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private homeContentService: HomeContentService) {
  }
  async ngOnInit(): Promise<void> {
    let data = await this.homeContentService.getHomeContent();
    console.log(data);
  }

}

