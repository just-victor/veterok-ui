import {ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-wind-display',
  templateUrl: './wind-display.component.html',
  styleUrls: ['./wind-display.component.scss']
})
export class WindDisplayComponent implements OnChanges {
  @Input()
  public deg: number;
  @Input()
  public speedMeters: number;


  constructor(private cdRef:ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cdRef.detectChanges();
  }

  getRotateValue(): string {
    return `rotate(${this.deg}deg)`;
  }

  getSpeedMeters(): number {
    // this.speedMeters = 1000;
    return this.speedMeters;
  }

  getSpeedKilometers(): number {
    return this.speedMeters! * 3.6;
  }
}
