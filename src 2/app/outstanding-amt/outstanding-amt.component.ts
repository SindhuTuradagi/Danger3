import { Component } from '@angular/core';
import { Data } from './data1';
import { DATAS } from './detail1';

@Component({
  selector: 'app-outstanding-amt',
  templateUrl: './outstanding-amt.component.html',
  styleUrls: ['./outstanding-amt.component.css']
})
export class OutstandingAmtComponent {
  datas: Data[] = DATAS;

}
