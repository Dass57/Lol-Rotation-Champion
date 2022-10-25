import { Component, OnInit } from '@angular/core';
import { ApiRiotService } from 'src/app/Services/api-riot.service';
import { ChampionsService } from 'src/app/Services/champions.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tabChampInfo!: any[]

  constructor(
    private titleService: Title,
    private ApiRiot: ApiRiotService,
    private championSerice: ChampionsService) {
      this.titleService.setTitle("Rotation semaine");
     }

  ngOnInit(): void { }
}
