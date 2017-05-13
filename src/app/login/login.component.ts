import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as fb from 'firebase/app';
import * as png from 'primeng/primeng';
// import * as str from '../string';
 


import {BaseComponent} from '../base/base.component';
import {DataMgrService} from '../data-mgr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

  error: png.Message[] = [];
  usrName: string = 'a@a.pl';
  usrPwd: string = 'aaaaaa';
  usrPwd1: string = '';
  usrPwd2: string = '';
  reg: boolean = false;


  constructor(
    public dataMgrService: DataMgrService,
    private cs: png.ConfirmationService, 
    private afa: AngularFireAuth) {super(dataMgrService);}

  ngOnInit() {
    
   
  }

  login(p: fb.Promise<any>): fb.Promise<any>{
    return p.then((a: fb.auth.UserCredential) => {
      this.dm.logedIn = true;
      this.reg = false;
      this.error = [];
      this.error.push({severity:'error', summary:this.ts('Komunikat'), detail:'ok'});
    });

  }

  loginByProvider(provider){
    this.login(this.afa.auth.signInWithPopup(provider))
      .catch((a: fb.FirebaseError) => {
        this.dm.logedIn = false;
        this.error.push({severity:'error', summary:this.ts('Komunikat'), detail:this.ts(a.code)});
      });
  }

  loginByEmail(){
     this.error = [];
     this.login(this.afa.auth.signInWithEmailAndPassword(this.usrName, this.usrPwd))
       .catch((a: fb.FirebaseError) => {
         this.dm.logedIn = false;
         this.error.push({severity:'error', summary: this.ts('Komunikat'), detail: this.ts(a.code)});
       });
  }
  loginByGoogle() {
     var provider = new fb.auth.GoogleAuthProvider();
     this.loginByProvider(provider);
  }
  loginByFacebook() {
     var provider = new fb.auth.FacebookAuthProvider();
     this.loginByProvider(provider);
  }

  newUser(){
    if (this.usrName.trim() === ""){
      this.error.push({severity:'error', summary: this.ts('Komunikat'), detail: this.ts("usrEmpty")});  
      return;    
    }

    this.error = [];
    this.usrPwd1 = "";
    this.usrPwd2 = "";
    this.reg = true;
  }

  registerByEmail(){
    if (this.usrPwd1 !== this.usrPwd2){
      this.error.push({severity:'error', summary: this.ts('Komunikat'), detail: this.ts("usrPwdDif")});  
      return;
    }

    this.login(this.afa.auth.createUserWithEmailAndPassword(this.usrName, this.usrPwd1))
      .catch((a: fb.FirebaseError) => {
        this.error.push({severity:'error', summary: this.ts('Komunikat'), detail: this.ts(a.code)});
      });
  }

  forgotPwd(){

  }
}