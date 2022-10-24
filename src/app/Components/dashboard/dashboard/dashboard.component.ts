import { Component, OnInit } from '@angular/core';
import { ApiRiotService } from 'src/app/Services/api-riot.service';
import { ChampionsService } from 'src/app/Services/champions.service';
import { Champions } from 'src/app/Models/champions';
import { Infos } from 'src/app/Models/infos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tabChampInfo!: any[]

  constructor(
      private ApiRiot: ApiRiotService,
      private championSerice: ChampionsService)
    {}

    ngOnInit(): void { }
}
