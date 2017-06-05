import { Component, OnInit } from '@angular/core';
import { DataMgrService } from '../data-mgr.service';
import * as png from 'primeng/primeng';

@Component({
  selector: 'app-base',
  template: '',
  styles: []
})
export class BaseComponent implements OnInit {

  constructor(
    protected dataMgrService: DataMgrService) { }

  ngOnInit() {
  }

  get dm(): DataMgrService{
    return this.dataMgrService;
  }

  ts(s: string, ...args): string{
    return this.dm.ts(s, args);
  }

  error: png.Message[] = [];
  err(sErr: string){
    this.error = [];
    this.error.push({severity:'error', summary:this.ts('Komunikat'), detail: sErr});    
  }


}
