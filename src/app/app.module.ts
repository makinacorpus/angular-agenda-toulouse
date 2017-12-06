import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { MapComponent } from './events/map/map.component';
import { ListComponent } from './events/list/list.component';
import { ApiService } from './api.service';

import 'hammerjs';
import { AppRoutingModule } from './/app-routing.module';
import { EventsComponent } from './events/events.component';
import { BanComponent } from './ban/ban.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListComponent,
    EventsComponent,
    BanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
