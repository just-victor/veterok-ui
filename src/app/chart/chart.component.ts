import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeviceStateDaoService} from "../services/device-state.dao.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  view: any[] = [window.innerWidth, 400];
  data: [];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Wind speed';
  timeline = true;

  colorScheme = {
    domain: ['#A10A28', '#C7B42C', '#5AA454', '#AAAAAA']
  };

  @Output()
  public deg = new EventEmitter<number>();

  @Output()
  public speedMeters = new EventEmitter<number>();


  constructor(
    private deviceStateDaoService: DeviceStateDaoService) { }

  ngOnInit() {
    this.setData();
  }

  private setData() {
    this.data = this.deviceStateDaoService.getDeviceStatesByImei("LOL IMEI");
    const length = this.deviceStateDaoService.data.length;
    this.speedMeters.emit(this.deviceStateDaoService.data[length - 1].avg);
    this.deg.emit(45);

  }

  public onSelect($event: {}) {
    console.log("on select");
  }
}
