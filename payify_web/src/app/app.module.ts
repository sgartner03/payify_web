import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

import {HttpClientModule} from '@angular/common/http';
import { ItemsListComponent } from './items-list/items-list.component'

import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ItemsDataService } from './items-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatTableModule
  ],
  providers: [ItemsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
