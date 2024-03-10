import { Component } from '@angular/core';
import { IFD } from '../Interfaces/IFD';

@Component({
  selector: 'fd-home',
  templateUrl: './fd-home.component.html',
  styleUrls: ['./fd-home.component.scss']
})
export class FdHomeComponent {
  recentlyViewedFD: IFD | undefined;

  constructor() {
    this.recentlyViewedFD = {
      FDNumber: 5109974845368,
      RelatedAccountNumber: 3975037509046,
      RelatedAccountName: 'Boni HDFC',
      StartDate: new Date(2021, 5, 3),
      Principal: 33000,
      InterestRate: 7.5,
      EndDate: new Date(2022, 5, 3),
      MaturityAmount: 35000
    };
  }
}
