import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiRiotService {
  riot = 'https://euw1.api.riotgames.com'
  constructor(private readonly httpClient: HttpClient) {}

  getFreeChampionRotation(){
    return this.httpClient.get(`${this.riot}/lol/platform/v3/champion-rotations?api_key=RGAPI-105a2fca-68f7-4b24-a207-9e9670eeef03`)
  }
}
