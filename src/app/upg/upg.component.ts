import { Component, OnInit } from '@angular/core';
import * as png from 'primeng/primeng';

import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-upg',
  templateUrl: './upg.component.html',
  styleUrls: ['./upg.component.css']
})
export class UpgComponent extends BaseComponent  implements OnInit {

  upgmsg: png.Message[] = [];
  upgIfo(sErr: string){
    this.error = [];
    this.error.push({severity:'error', summary:this.ts('Komunikat'), detail: sErr});    
  }

  ngOnInit() {
    if (!this.dm.upgraded){
      this.upgmsg = [];
      this.upgmsg.push({severity:'info', summary:this.ts('Komunikat'), detail: "Aktualizacja w toku pozostało x kroków z"});    
    }
  }

}
