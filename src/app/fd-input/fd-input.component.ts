import { Component, Input } from '@angular/core';

@Component({
  selector: 'fd-input',
  templateUrl: './fd-input.component.html',
  styleUrls: ['./fd-input.component.scss']
})
export class FdInputComponent {
  @Input() fdCSV: string = '';
  cSharpString: string = '';

  constructor() { this.fdCSV = ''; }

  evaluateCSV() {
    this.cSharpString = this.fdCSV;

    this.fdCSV.split('\n').forEach(line => {
      console.log(line);
      var csvString = line.split(',');

    });
  }

  autoGrowTextZone(e: Event) {
    var target = e.target as HTMLInputElement;
    target.style.height = "0px";
    var height = target.scrollHeight;
    target.style.height = (height == 0 ? 200 : (height > 400 ? 400 : height + 25)) + "px";
  }
}
