import { HttpClientModule } from '@angular/common/http';
import { Input, NgModule } from '@angular/core';
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
import {InputTextModule} from 'primeng/inputtext';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SpeedDialModule} from 'primeng/speeddial';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewItemsComponent,
    NavBarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    MenuModule,
    InputTextModule,
    SplitButtonModule,
    SpeedDialModule

  ],
  providers: [
    ItemService,
    ItemApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
