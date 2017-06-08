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

  progress: string = this.ts('upgProgress', this.dm.upgResult.versionDb, this.dm.upgResult.versionRq);
  btnUpgDisabled: boolean = false;

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => {
      this.dm.upgOk().then(() => this.ts('upgProgress', this.dm.upgResult.versionDb, this.dm.upgResult.versionRq));
    });
  }

  upg(){
    if (this.dm.upgResult === null){
      return;
    }
    if (this.dm.upgResult.versionDb === this.dm.upgResult.versionRq){
      return;
    }
    this.btnUpgDisabled = true;
    this.dm.upg(this.dm.upgResult.versionDb + 1).then(() => this.upg()).catch(r => {this.progress = r; this.btnUpgDisabled = false;});
  }
}
