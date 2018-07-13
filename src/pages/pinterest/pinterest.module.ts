import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinterestPage } from './pinterest';

@NgModule({
  declarations: [
    PinterestPage,
  ],
  imports: [
    IonicPageModule.forChild(PinterestPage),
  ],
})
export class PinterestPageModule {}
