import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  weather = {name: "", humidity: '', tempavg: '', temphigh: '', templow: '', status: ''};

  ngOnInit() {
    this.getWashington();
  }

  getWashington() {
    console.log("getting Washington component")
    let observable = this._httpService.getWashingtonApi('Washington');
    observable.subscribe((data: any) => {
      console.log("Washington", data);
      this.weather.name = data.name;
      this.weather.humidity = data.main.humidity;
      this.weather.tempavg = data.main.temp;
      this.weather.temphigh = data.main.temp_max;
      this.weather.templow = data.main.temp_min;
      this.weather.status = data.weather[0].description;
    });
  }

}
