import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';

import { PopupDemoComponent } from './popup-demo/popup-demo.component';
import { PopupDirective } from './popup.directive';


@NgModule({
  declarations: [
    AppComponent,
    PopupDemoComponent,
    PopupDirective
],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
