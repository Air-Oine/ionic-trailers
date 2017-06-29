import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrailersPage } from './trailers';

@NgModule({
  declarations: [
    TrailersPage,
  ],
  imports: [
    IonicPageModule.forChild(TrailersPage),
  ],
  exports: [
    TrailersPage
  ]
})
export class TrailersPageModule {}
