import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiRiotService {
  riot = 'https://euw1.api.riotgames.com'
  constructor(private readonly httpClient: HttpClient) {}

  getFreeChampionRotation(){
    return this.httpClient.get(`${this.riot}/lol/platform/v3/champion-rotations?api_key=RGAPI-df096059-0500-49b6-8a08-bdc0f2baca2d`)
  }
}
