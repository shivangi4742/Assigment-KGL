import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicDashboardComponent } from './music-dashboard/music-dashboard.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe }from './pipe/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MusicDashboardComponent,
    FilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
