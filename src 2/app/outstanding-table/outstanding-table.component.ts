import { Component } from '@angular/core';
import { Data } from './data3';
import { DATAS } from './detail3';

@Component({
  selector: 'app-outstanding-table',
  templateUrl: './outstanding-table.component.html',
  styleUrls: ['./outstanding-table.component.css']
})
export class OutstandingTableComponent {

  datas: Data[] = DATAS;
}
