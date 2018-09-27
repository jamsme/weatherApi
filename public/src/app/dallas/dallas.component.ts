import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  weather = {name: "", humidity: '', tempavg: '', temphigh: '', templow: '', status: ''};

  ngOnInit() {
    this.getDallas();
  }

  getDallas() {
    console.log("getting burbank component")
    let observable = this._httpService.getDallasApi('Dallas');
    observable.subscribe((data: any) => {
      console.log("Dallas", data);
      this.weather.name = data.name;
      this.weather.humidity = data.main.humidity;
      this.weather.tempavg = data.main.temp;
      this.weather.temphigh = data.main.temp_max;
      this.weather.templow = data.main.temp_min;
      this.weather.status = data.weather[0].description;
    });
  }

}
