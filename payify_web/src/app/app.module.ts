import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

import {HttpClientModule} from '@angular/common/http';
import { ItemsListComponent } from './items-list/items-list.component'

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
