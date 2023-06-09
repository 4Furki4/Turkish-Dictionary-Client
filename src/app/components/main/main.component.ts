import { Component, OnInit } from "@angular/core";
import { Kelime, Atasoz } from "src/app/models/home-content-response";
import { HomeContentService } from "src/app/services/home-content.service";

@Component({
  selector: 'sozluk-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private homeContentService: HomeContentService) {
  }
  kelime !: Kelime
  atasoz !: Atasoz;
  ngOnInit(): void {
    this.homeContentService.getHomeContent().subscribe({
      next: (data) => {
        this.atasoz = data.atasoz[0];
        this.kelime = data.kelime[0];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}

