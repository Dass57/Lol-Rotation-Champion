import { Component, OnInit } from '@angular/core';
import { ApiRiotService } from 'src/app/Services/api-riot.service';
import { ChampionsService } from 'src/app/Services/champions.service';
import { Champions } from 'src/app/Models/champions';
import { Infos } from 'src/app/Models/infos';
import { KeyChamp } from 'src/app/Models/key-champ';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  NomChamp!: string;
  idChampRota!: Array<number>;
  champKeys!: any

  constructor(
    private ApiRiot: ApiRiotService,
    private championSerice: ChampionsService) {
    ApiRiot.getFreeChampionRotation().subscribe(info => {
      let infos = info as Infos
      console.log(infos.freeChampionIds);
      this.idChampRota = infos.freeChampionIds
      for (let key of infos.freeChampionIds) {
        // this.getChampName(key)
        this.championSerice.search()
      }
    })
  }

  ngOnInit(): void { }

 async getChampName(id: string) {
    this.championSerice.getChampion().subscribe(champ => {
      this.champKeys = champ.data as Champions
      for (var i in this.champKeys) {
        if (this.champKeys[i].key == id) {
          this.NomChamp = this.champKeys[i].id
          console.log(this.champKeys[i].id);
        }
      }
    })
  }
}
