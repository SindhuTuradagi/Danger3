import { Component } from '@angular/core';
import { Data } from './data2';
import { DATAS } from './detail2';

@Component({
  selector: 'app-total-pmt',
  templateUrl: './total-pmt.component.html',
  styleUrls: ['./total-pmt.component.css']
})
export class TotalPmtComponent {
  datas: Data[] = DATAS;
}
