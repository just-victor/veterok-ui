import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'veterok-ui';
  private deg:number;


  constructor(private cdRef:ChangeDetectorRef) {
    // cdRef.detectChanges();
  }

  setDeg(deg:number) {
    this.deg = deg;
  }

  getDeg() {
    return this.deg;
  }
}
