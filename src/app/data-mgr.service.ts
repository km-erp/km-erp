import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {AngularFireAuth} from 'angularfire2/auth';

import {cTrans} from './trans';
import {config} from './config';
import * as sf from 'typescript-string-operations/source/source';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

class UpgParam{
  public authToken: String;
  public upgCall: number;
}

export class UpgResult{
  public authorized: Boolean;
  public requires: Boolean;
  public upgraded: Boolean;
  public versionDb: number;
  public versionRq: number;
}


@Injectable()
export class DataMgrService {

  private trans = cTrans;
  public logedIn: boolean = false;
  public upgraded: boolean = false;
 
  constructor(
    private http: Http, 
    private afa: AngularFireAuth) {
  }

  ts(sTs: string, ...args): string{
    let sTs1: string = sTs.toLowerCase();
    let i = this.trans.findIndex(t => t.id.toLowerCase() === sTs1);
    if (i != -1){
      sTs = this.trans[i].pl;
    }
    
    if (args.length > 0){
      sTs = sf.sf.String.Format(sTs, args);
    }
    return sTs;
  }

  token(): String{
    this.afa.auth.currentUser.getToken(false);
    return this.afa.auth.currentUser.refreshToken;
  }

  upgCall(fun: String): Promise<UpgResult>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let p: UpgParam = new UpgParam();
    p.authToken = this.token();
    p.upgCall = 0;

    return this.http.post(config.backUrl + fun, p, options)
      .toPromise()
      .then(r => r.json() as UpgResult)
      .catch();      
  }

  upg(): Promise<UpgResult>{
    return this.upgCall("upg");
  }

  upgOk(){
    this.upgCall("upgOk").then(ur => this.upgraded = ur.upgraded.valueOf()).catch(() => this.upgraded = false);
  }

  rightChk(right: String): boolean{
    return true;
  }

  
}
