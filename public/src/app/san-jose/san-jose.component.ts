import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  weather = {name: "", humidity: '', tempavg: '', temphigh: '', templow: '', status: ''};

  ngOnInit() {
    this.getSanJose();
  }

  getSanJose() {
    console.log("getting SanJose component")
    let observable = this._httpService.getSanJoseApi('San Jose');
    observable.subscribe((data: any) => {
      console.log("SanJose", data);
      this.weather.name = data.name;
      this.weather.humidity = data.main.humidity;
      this.weather.tempavg = data.main.temp;
      this.weather.temphigh = data.main.temp_max;
      this.weather.templow = data.main.temp_min;
      this.weather.status = data.weather[0].description;
    });
  }

}
