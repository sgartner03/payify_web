import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

import {HttpClientModule} from '@angular/common/http';
import { ItemsListComponent } from './items-list/items-list.component'

import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ItemsDataService } from './items-data.service';
import { NavbarComponent } from './navbar/navbar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { RoutingModule } from './routing/routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatTableModule,
    MatSidenavModule,
    RoutingModule,
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule,
    MatListModule
  ],
  providers: [ItemsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
