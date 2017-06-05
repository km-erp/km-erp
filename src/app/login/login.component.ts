import { Component, OnInit, isDevMode } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as fb from 'firebase/app';
import * as png from 'primeng/primeng';
// import * as str from '../string';
 


import {BaseComponent} from '../base/base.component';
import {DataMgrService} from '../data-mgr.service';
import {config} from '../config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

  usrName: string = '';
  usrPwd: string = '';
  usrPwd2: string = '';
  shwReg: boolean = false;
  shwReset: boolean = false;
  captchaChecked: boolean = false;


  constructor(
    protected dataMgrService: DataMgrService,
    private cs: png.ConfirmationService, 
    private afa: AngularFireAuth) 
  {
    super(dataMgrService);

    if (isDevMode()){
      this.usrName = config.prodUsr;
      this.usrPwd = config.prodUsrPwd;
      this.usrPwd2 = config.prodUsrPwd;
      this.loginByEmail();
    }
  }

  ngOnInit() {
    
   
  }

// logowanie:
  login(p: fb.Promise<any>): fb.Promise<any>{
    return p.then((a: fb.auth.UserCredential) => {
      this.dm.logedIn = true;
      this.shwReg = false;
      this.error = [];
      this.dm.upgOk();
    });

  }

  loginByProvider(provider){
    this.login(this.afa.auth.signInWithPopup(provider))
      .catch((a: fb.FirebaseError) => {
        this.dm.logedIn = false;
        this.err(this.ts(a.code));
      });
  }

  loginByEmail(){
     this.error = [];
     this.login(this.afa.auth.signInWithEmailAndPassword(this.usrName, this.usrPwd))
       .catch((a: fb.FirebaseError) => {
         this.dm.logedIn = false;
         this.err(this.ts(a.code));
       });
  }
  loginByGoogle() {
     let provider = new fb.auth.GoogleAuthProvider();
     this.loginByProvider(provider);
  }
  loginByFacebook() {
     let provider = new fb.auth.FacebookAuthProvider();
     this.loginByProvider(provider);
  }

// pokaż nowy użytkownik
  newUser(){
    if (this.usrName.trim() === ""){
      this.err(this.ts("usrEmpty"));  
      return;    
    }

    this.captchaChecked = false;
    this.usrPwd2 = "";
    this.shwReg = true;
  }
// pokaż reset hasła
  forgotPwd(){
    this.shwReset = true;
  }

// nowy użytkownik email
  registerByEmail(){
    this.error = [];
    if (this.usrPwd !== this.usrPwd2){
      this.err(this.ts("usrPwdDif"));  
      return;
    }

    this.login(this.afa.auth.createUserWithEmailAndPassword(this.usrName, this.usrPwd)).catch((a: fb.FirebaseError) => this.err(this.ts(a.code, this.usrName)));
  }

// reset hasło do email
  resetByEmail(){
    this.afa.auth.sendPasswordResetEmail(this.usrName)
      .then(() => {
        this.shwReset = false;
        this.err(this.ts("emailSent", this.usrName));})
      .catch((a: fb.FirebaseError) => this.err(this.ts(a.code)));
  }

  captchaOk(event) {
    this.captchaChecked = true;
  }  

  cancel(){
    this.shwReg = false;
    this.shwReset = false;
  }
}