import { Injectable } from '@angular/core';

import {cTrans} from './trans';
import * as sf from 'typescript-string-operations/source/source';


@Injectable()
export class DataMgrService {

  private trans = cTrans;
  public logedIn: boolean = false;
 
  constructor() {
    this.logedIn = false;
  }

  ts(sTs: string, ...args): string{
    var sTs1: string = sTs.toLowerCase();
    var i = this.trans.findIndex(t => t.id.toLowerCase() === sTs1);
    if (i != -1){
      sTs = this.trans[i].pl;
    }
    
    if (args.length > 0){
      sTs = sf.sf.String.Format(sTs, args);
    }
    return sTs;
  }
}
