import { HttpClientModule } from '@angular/common/http';
import { Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AutoCompleteModule } from "primeng/autocomplete"
import { ItemApiService } from './item-api.service';

import { ViewItemsComponent } from './view-items/view-items.component';


import { ChipsModule } from "primeng/chips";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {MenuItemContent, MenuModule} from 'primeng/menu';
import {MenuItem, MessageService,} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import {FilterService} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SpeedDialModule} from 'primeng/speeddial';
import { AddItemComponent } from './add-item/add-item.component';
import {DropdownModule} from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { UpdateItemComponent } from './update-item/update-item.component';
import { HomeComponent } from './home/home.component';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    ViewItemsComponent,
    NavBarComponent,
    AddItemComponent,
    UpdateItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    MenuModule,
    InputTextModule,
    SplitButtonModule,
    SpeedDialModule,
    DropdownModule,
    AutoCompleteModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    RippleModule,
    CardModule,
    RouterModule.forRoot([
      { path: 'view', component: ViewItemsComponent },
      { path: 'add', component: AddItemComponent},
      { path: 'update', component: UpdateItemComponent},
      { path: 'home', component: HomeComponent}
    ])

  ],
  providers: [
    
    ItemApiService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
