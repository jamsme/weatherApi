import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  weather = {name: "", humidity: '', tempavg: '', temphigh: '', templow: '', status: ''};

  ngOnInit() {
    this.getSeattle();
  }

  getSeattle() {
    console.log("getting Seattle component")
    let observable = this._httpService.getSeattleApi('Seattle');
    observable.subscribe((data: any) => {
      console.log("Seattle", data);
      this.weather.name = data.name;
      this.weather.humidity = data.main.humidity;
      this.weather.tempavg = data.main.temp;
      this.weather.temphigh = data.main.temp_max;
      this.weather.templow = data.main.temp_min;
      this.weather.status = data.weather[0].description;
    });
  }

}
