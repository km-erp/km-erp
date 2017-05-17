import { Component, OnInit } from '@angular/core';
import { DataMgrService } from '../data-mgr.service';

@Component({
  selector: 'app-base',
  template: '',
  styles: []
})
export class BaseComponent implements OnInit {

  b: boolean = true;

  constructor(
    protected dataMgrService: DataMgrService) { }

  ngOnInit() {
  }

  get dm(): DataMgrService{
    return this.dataMgrService;
  }

  ts(s: string, ...args): string
  {
    return this.dm.ts(s, args);
  }
}
