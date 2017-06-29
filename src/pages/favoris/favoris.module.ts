import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavorisPage } from './favoris';

@NgModule({
  declarations: [
    FavorisPage,
  ],
  imports: [
    IonicPageModule.forChild(FavorisPage),
  ],
  exports: [
    FavorisPage
  ]
})
export class FavorisPageModule {}
