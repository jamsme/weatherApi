import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getBurbankApi(city){
    console.log("getting burbank api")
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6f2782e4e065a6d3e06dbbbc35e40240`);
  }

  getChicagoApi(city){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6f2782e4e065a6d3e06dbbbc35e40240`);
  }

}