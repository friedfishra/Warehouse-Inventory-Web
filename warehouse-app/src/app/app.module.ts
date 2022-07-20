import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemApiService } from './item-api.service';
import { ItemService } from './item.service';
import { ViewItemsComponent } from './view-items/view-items.component';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {MenuItemContent, MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import {FilterService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    ViewItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    MenuModule

  ],
  providers: [
    ItemService,
    ItemApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
