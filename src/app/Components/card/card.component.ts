import { Component, OnInit } from '@angular/core';
import { ApiRiotService } from 'src/app/Services/api-riot.service';
import { ChampionsService } from 'src/app/Services/champions.service';
import { Champions } from 'src/app/Models/champions';
import { Infos } from 'src/app/Models/infos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  tabChampInfo: Array<any> =[]
  constructor(
    private ApiRiot: ApiRiotService,
    private championSerice: ChampionsService
    )
  {
    this.ApiRiot.getFreeChampionRotation().subscribe(info => {
      let infos = info as Infos
      for (let key of infos.freeChampionIds) {
        this.championSerice.search(key)
        this.tabChampInfo = this.championSerice.tabChampInfo
      }
    })
  }

  ngOnInit(): void {
  }

}
