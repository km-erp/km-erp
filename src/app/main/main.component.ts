import { Component, OnInit } from '@angular/core';
import * as pn from 'primeng/primeng';

import {BaseComponent} from '../base/base.component';
import {DataMgrService} from '../data-mgr.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {

  private mnuMain: pn.MenuItem[];

  private data: String;

  constructor(
    protected dataMgrService: DataMgrService) {
      super(dataMgrService);
    }

  ngOnInit() {
    this.mnuMain = [
      {label: this.ts('mnuDoc'), icon: 'fa-files-o', items: [
        {label: this.ts('mnuDocWarehouse'), command: (event) => {this.data = this.dm.token()}},
        {label: this.ts('mnuDocStocktaking'), command: (event) => {}}
      ]},
      {label: this.ts('mnuFiles'), icon: 'fa-folder-open', items: [
        {label: this.ts('mnuFilesContr'), command: (event) => {}},
        {label: this.ts('mnuFilesGoods'), command: (event) => {}},

      ]},
      {label: this.ts('mnuRep'), icon: 'fa-cube'},
      {label: this.ts('mnuSet'), icon: 'fa-gear'}
    ];
  }

}
