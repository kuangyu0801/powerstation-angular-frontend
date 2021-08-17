import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinkqueryComponent } from './components/linkquery/linkquery.component';
import { HttpClientModule } from '@angular/common/http';
import { StationListComponent } from './components/station-list/station-list.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // specific to generic
  {path: 'stations', component: StationListComponent},
  {path: 'query', component: LinkqueryComponent},
  {path: '', redirectTo: '/stations', pathMatch: 'full'},
  {path: '**', redirectTo: '/stations', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LinkqueryComponent,
    StationListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
