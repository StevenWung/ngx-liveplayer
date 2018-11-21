import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxLiveplayerModule} from 'ngx-liveplayer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLiveplayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
