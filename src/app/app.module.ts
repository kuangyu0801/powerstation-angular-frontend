import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinkqueryComponent } from './components/linkquery/linkquery.component';
import { HttpClientModule } from '@angular/common/http';
import { StationListComponent } from './components/station-list/station-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkqueryComponent,
    StationListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
