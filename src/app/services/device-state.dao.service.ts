import {Injectable} from "@angular/core";
import {DeviceState} from "../entities/device-state.entity";

@Injectable()
export class DeviceStateDaoService {
  public data: DeviceState[] = [
    {
      "time": 0,
      "min": 5,
      "max": 20,
      "avg": 13
    },
    {
      "time": 1,
      "min": 6,
      "max": 16,
      "avg": 5
    },
    {
      "time": 2,
      "min": 1,
      "max": 17,
      "avg": 13
    },
    {
      "time": 3,
      "min": 4,
      "max": 17,
      "avg": 9
    },
    {
      "time": 4,
      "min": 1,
      "max": 18,
      "avg": 7
    },
    {
      "time": 5,
      "min": 7,
      "max": 17,
      "avg": 13
    },
    {
      "time": 6,
      "min": 8,
      "max": 14,
      "avg": 5
    },
    {
      "time": 7,
      "min": 5,
      "max": 17,
      "avg": 11
    },
    {
      "time": 8,
      "min": 0,
      "max": 16,
      "avg": 7
    },
    {
      "time": 9,
      "min": 1,
      "max": 14,
      "avg": 11
    },
    {
      "time": 10,
      "min": 3,
      "max": 14,
      "avg": 13
    },
    {
      "time": 11,
      "min": 6,
      "max": 16,
      "avg": 10
    },
    {
      "time": 12,
      "min": 6,
      "max": 19,
      "avg": 5
    },
    {
      "time": 13,
      "min": 0,
      "max": 16,
      "avg": 7
    },
    {
      "time": 14,
      "min": 6,
      "max": 14,
      "avg": 13
    },
    {
      "time": 15,
      "min": 8,
      "max": 19,
      "avg": 7
    },
    {
      "time": 16,
      "min": 6,
      "max": 19,
      "avg": 10
    },
    {
      "time": 17,
      "min": 7,
      "max": 19,
      "avg": 7
    },
    {
      "time": 18,
      "min": 7,
      "max": 14,
      "avg": 13
    },
    {
      "time": 19,
      "min": 7,
      "max": 16,
      "avg": 7
    }
  ];

  public getDeviceStatesByImei(imei: string): any {
    return this.reMap(this.data);
  }

  private reMap(deviceState: DeviceState[]): any {
    const max = {
      name: 'Max',
      series: []
    };
    const min = {
      name: 'Min',
      series: []
    };
    const avg = {
      name: 'Avg',
      series: []
    };
    deviceState.forEach((state) => {
      max.series.push({
        name: state.time,
        value: state.max
      });

      min.series.push({
        name: state.time,
        value: state.min
      });

      avg.series.push({
        name: state.time,
        value: state.avg
      });
    });
    return [max, avg, min];
  }
}
