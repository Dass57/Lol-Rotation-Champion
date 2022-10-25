import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiRiotService {
  riot = 'https://euw1.api.riotgames.com'
  api_key = 'RGAPI-944f6a5e-129c-46b9-a909-9532abda3844'
  constructor(private readonly httpClient: HttpClient) {}

  getFreeChampionRotation(){
    return this.httpClient.get(`${this.riot}/lol/platform/v3/champion-rotations?api_key=${this.api_key}`)
  }
}
