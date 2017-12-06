import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { BanComponent } from './ban/ban.component';

const routes: Routes = [
  { path: 'ban', component: BanComponent, pathMatch: 'full' },
  { path: '', component: EventsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
