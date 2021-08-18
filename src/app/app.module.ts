import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinkqueryComponent } from './components/linkquery/linkquery.component';
import { HttpClientModule } from '@angular/common/http';
import { StationListComponent } from './components/station-list/station-list.component';

import { Routes, RouterModule } from '@angular/router';
import { StationDeleteComponent } from './components/station-delete/station-delete.component';
import { StationUpdateComponent } from './components/station-update/station-update.component';

const routes: Routes = [
  // specific to generic
  {path: 'stations/delete', component: StationDeleteComponent},
  {path: 'stations/update', component: StationUpdateComponent},
  {path: 'stations', component: StationListComponent},
  {path: 'query', component: LinkqueryComponent},
  {path: '', redirectTo: '/stations', pathMatch: 'full'},
  {path: '**', redirectTo: '/stations', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LinkqueryComponent,
    StationListComponent,
    StationDeleteComponent,
    StationUpdateComponent
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
