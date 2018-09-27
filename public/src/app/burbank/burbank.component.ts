import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  weather = {name: "", humidity: '', tempavg: '', temphigh: '', templow: '', status: ''};
  
  ngOnInit() {
    this.getBurbank();
  }
  getBurbank() {
    console.log("getting burbank component")
    let observable = this._httpService.getBurbankApi('Burbank');
    observable.subscribe((data: any) => {
      console.log("Burbank", data);
      this.weather.name = data.name;
      this.weather.humidity = data.main.humidity;
      this.weather.tempavg = data.main.temp;
      this.weather.temphigh = data.main.temp_max;
      this.weather.templow = data.main.temp_min;
      this.weather.status = data.weather[0].description;
    });
  }
}
