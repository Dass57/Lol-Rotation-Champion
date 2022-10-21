import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Champions } from '../Models/champions';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private readonly httpClient: HttpClient) {}

  getChampion(){
    return this.httpClient.get<any>('http://localhost:4200/assets/JSON/champion.json/')
  }
  search(){
    return this.httpClient.get<any>('http://localhost:4200/assets/JSON/champion.json/').subscribe( champ => {
      for (var i in champ.data) {
        console.log(champ.data[i].id);
      }
    })
  }


}
