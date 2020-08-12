import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/models.tutorial'
import { AppState } from './../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>
  // accessing the store from ngrx within the constructor, 
  // and then selecting tutorial which is defined as a the property from app.module.ts 
  // in StoreModule.forRoot({}). This calls the tutorial reducer and returns the tutorial state.

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit(): void {
  }

}
