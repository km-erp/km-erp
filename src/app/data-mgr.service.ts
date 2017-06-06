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
import {consts} from './consts';

class StdParam{
  public authToken: String;
}
class UpgParam extends StdParam{
  public upgCall: number;
}
class RgtParam extends StdParam{
  public rgtName: string;
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


@Injectable()
export class DataMgrService {

  private trans = trans;
  public logedIn: boolean = false;
  public upgraded: boolean = false;
  public rgtAdm: boolean = false;
 
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

  bck(fun: String, p: StdParam): Promise<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(config.bckUrl + fun, p, options).toPromise().then(r => r.json());      
  }

  upg(call: number): Promise<UpgResult>{
    let p: UpgParam = new UpgParam();
    p.authToken = this.token();
    p.upgCall = call;
    return this.bck("upg", p) as Promise<UpgResult>;
  }

  upgOk(){
    let p: UpgParam = new UpgParam();
    p.authToken = this.token();
    p.upgCall = 0;
    this.bck("upgOk", p).then(ur => this.upgraded = ur.upgraded.valueOf()).catch(() => this.upgraded = false);
  }

  rgtChk(){
    let p: RgtParam = new RgtParam;
    p.authToken = this.token();
    p.rgtName = consts.rgtAdm;
    this.bck("rgtChk", p).then(ru => this.rgtAdm = ru.has.valueOf()).catch(() => this.rgtAdm = false);
  }

  
}
