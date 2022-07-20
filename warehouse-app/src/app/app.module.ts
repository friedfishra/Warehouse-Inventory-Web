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
    ButtonModule

  ],
  providers: [
    ItemService,
    ItemApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
