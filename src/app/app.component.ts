import {Component} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {BaseComponent} from './base/base.component';
import {DataMgrService} from './data-mgr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends BaseComponent {
  constructor(
    public dataMgrService: DataMgrService) { 
      super(dataMgrService);
    }

}