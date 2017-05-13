// import lib
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as pn from 'primeng/primeng';    

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';

// import mine
import { AppComponent } from './app.component';
import { DataMgrService } from './data-mgr.service';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';



export const firebaseConfig = {
  apiKey: "AIzaSyDH4iDqVyzW4v8B9-_Lg9iHAgJT6RKvZ5k",
  authDomain: "km-erp.firebaseapp.com",
  databaseURL: "https://km-erp.firebaseio.com",
  projectId: "km-erp",
  storageBucket: "km-erp.appspot.com",
  messagingSenderId: "1059595035146"
};

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    
    pn.AccordionModule,
    pn.AutoCompleteModule,
    pn.ButtonModule,
    pn.ConfirmDialogModule,
    pn.DialogModule,
    pn.DropdownModule,
    pn.InputMaskModule,
    pn.InputTextModule,
    pn.ListboxModule,
    pn.MessagesModule,
    pn.PanelModule,
    pn.PasswordModule,
    pn.RadioButtonModule,
    pn.SplitButtonModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    pn.ConfirmationService,
    
    DataMgrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
