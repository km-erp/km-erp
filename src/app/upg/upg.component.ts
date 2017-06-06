import { Component, OnInit } from '@angular/core';
import * as png from 'primeng/primeng';

import {Observable} from 'rxjs/Rx';

import {BaseComponent} from '../base/base.component';
import {consts} from '../consts';

@Component({
  selector: 'app-upg',
  templateUrl: './upg.component.html',
  styleUrls: ['./upg.component.css']
})
export class UpgComponent extends BaseComponent  implements OnInit {

  progress: string = this.ts('upgProgress');

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.dm.upgOk());
  }
}
