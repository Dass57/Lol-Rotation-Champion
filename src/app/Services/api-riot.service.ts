import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiRiotService {
  riot = environment.apiUrl;
  api_key = environment.api_key;
  constructor(private readonly httpClient: HttpClient) {}

  // getFreeChampionRotation(){
  //   let headers = new HttpHeaders();
  //   headers = headers.set('X-Riot-Token', this.api_key);
  //   return this.httpClient.get(`${this.riot}/champion-rotations`,{ headers : headers })
  // }
  getFreeChampionRotation(){
    return this.httpClient.get(`https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-32134889-a851-4661-9b46-104544123e2a`)
  }
}
