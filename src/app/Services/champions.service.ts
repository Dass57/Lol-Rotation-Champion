import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Champions } from '../Models/champions';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  tabChampInfo: Array<any> =[]
  tabChampInfoByName: Array<any> =[]
  constructor(
    private readonly httpClient: HttpClient,) {}

  search(id: string) {
    return this.httpClient.get<any>('http://localhost:4200/assets/JSON/championFull.json').subscribe(champ => {
      for (var i in champ.data) {
        if (champ.data[i].key == id) {
          this.tabChampInfo.push(champ.data[i])
        }
      }
    })
  }
  getChampionbyName(name:string) {
    return this.httpClient.get<any>('http://localhost:4200/assets/JSON/championFull.json').subscribe(champ =>{
      this.tabChampInfoByName[0]=champ.data[name]
    })
  }
}
