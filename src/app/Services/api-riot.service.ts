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
    return this.httpClient.get(`${this.riot}?api_key=RGAPI-14b965db-fed9-4b26-8bfb-15061105cefb`)
  }
}
