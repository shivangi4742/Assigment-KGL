import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicDashboardComponent } from './music-dashboard/music-dashboard.component';


const routes: Routes = [{
  path: 'music', component: MusicDashboardComponent
},
{ path: '', redirectTo: 'music', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
