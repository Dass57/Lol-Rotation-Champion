import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiRiotService {
  riot = 'https://euw1.api.riotgames.com'
  constructor(private readonly httpClient: HttpClient) {}

  getFreeChampionRotation(){
    return this.httpClient.get(`${this.riot}/lol/platform/v3/champion-rotations?api_key=RGAPI-126e3588-2434-47f3-95bf-814495333d8e`)
  }
}
