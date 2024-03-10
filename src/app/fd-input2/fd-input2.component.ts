import { Component, Input } from '@angular/core';

@Component({
  selector: 'fd-input2',
  templateUrl: './fd-input2.component.html',
  styleUrls: ['./fd-input2.component.scss']
})
export class FdInput2Component {
  
  @Input() fdCSV: string = '';
  cSharpString: string = '';

  constructor() { this.fdCSV = ''; }

  evaluateCSV() {
    alert("hi");
    this.cSharpString = this.fdCSV;
    alert("hi");
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
