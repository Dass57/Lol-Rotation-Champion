import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Champions } from '../Models/champions';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  tabChampInfo: Array<any> =[]
  constructor(
    private readonly httpClient: HttpClient,) {}

  getChampion() {
    return this.httpClient.get<any>('http://localhost:4200/assets/json/champion.json/')
  }
  search(id: string) {
    return this.httpClient.get<any>('http://localhost:4200/assets/json/championFull.json/').subscribe(champ => {
      for (var i in champ.data) {
        if (champ.data[i].key == id) {
          this.tabChampInfo.push(champ.data[i])
        }
      }
    })
  }

}
