// import lib
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';

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
import { config } from './config';
import { UpgComponent } from './upg/upg.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    MainComponent,
    UpgComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    JsonpModule,
    FormsModule,
    HttpModule,
    
    pn.AccordionModule,
    pn.AutoCompleteModule,
    pn.ButtonModule,
    pn.ConfirmDialogModule,
    pn.DialogModule,
    pn.DropdownModule,
    pn.GrowlModule,
    pn.InputMaskModule,
    pn.InputTextModule,
    pn.ListboxModule,
    pn.MenuModule,
    pn.MessagesModule,
    pn.PanelModule,
    pn.PanelMenuModule,
    pn.ProgressBarModule,
    pn.PasswordModule,
    pn.RadioButtonModule,
    pn.CaptchaModule,
    pn.SplitButtonModule,
    pn.TooltipModule,

    AngularFireModule.initializeApp(config.firebase),
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
