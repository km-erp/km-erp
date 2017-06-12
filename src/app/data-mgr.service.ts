import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {AngularFireAuth} from 'angularfire2/auth';

import * as sf from 'typescript-string-operations/source/source';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {trans} from './trans';
import {config} from './config';
import {Consts} from './consts';

class StdParam{
  public authToken: String;
}
class UpgParam extends StdParam{
  public upgCall: number;
}
class RgtParam extends StdParam{
  public rgtName: string;
}
class FirmParam extends StdParam{
}

class StdResult{
  public authorized: Boolean;
}
export class UpgResult extends StdResult{
  public requires: Boolean;
  public upgraded: Boolean;
  public versionDb: number;
  public versionRq: number;
}
export class RgtResult extends StdResult{
  public has: Boolean;
}
export class FirmResult extends StdResult{
  public firm: {
    id: Number;
    firmName: String;
  }
}


@Injectable()
export class DataMgrService {

  private trans = trans;
  public logedIn: boolean = false;
  public upgResult: UpgResult = null;
  public rgtAdm: boolean = false;
  public consts = new Consts();
  public firmId = null;
 
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
    
    switch (args.length){
      case 1: sTs = sf.sf.String.Format(sTs, args[0]); break;
      case 2: sTs = sf.sf.String.Format(sTs, args[0], args[1]); break;
      case 3: sTs = sf.sf.String.Format(sTs, args[0], args[1], args[2]); break;
    }
    return sTs;
  }

  token(): String{
    this.afa.auth.currentUser.getToken(false);
    return this.afa.auth.currentUser.refreshToken;
  }

  bck(fun: String, p: StdParam): Promise<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(config.bckUrl + fun, p, options).toPromise().then(r => r.json());      
  }

  upg(call: number): Promise<UpgResult>{
    let p: UpgParam = new UpgParam();
    p.authToken = this.token();
    p.upgCall = call;
    return (this.bck("upg", p) as Promise<UpgResult>).then(ur => this.upgResult);
  }

  upgOk(): Promise<UpgResult>{
    let p: UpgParam = new UpgParam();
    p.authToken = this.token();
    p.upgCall = 0;
    return this.bck("upgOk", p).then(ur => {
      if (ur.versionRq !== this.consts.versionRq || ur.versionDb !== this.consts.versionRq){
        ur.upgraded = false;
      }
      this.upgResult = ur}).catch(() => this.upgResult = null);
  }

  rgtChk(){
    let p: RgtParam = new RgtParam;
    p.authToken = this.token();
    p.rgtName = this.consts.rgtAdm;
    this.bck("rgtChk", p).then(ru => this.rgtAdm = ru.has.valueOf()).catch(() => this.rgtAdm = false);
  }

  firmChk(){
    let p: FirmParam = new FirmParam;
    p.authToken = this.token();
    this.bck("firmByUsr", p).then(rf => this.firmId = rf.firm.id);
  }

  
}
