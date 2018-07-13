import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacebookPage } from './facebook';

@NgModule({
  declarations: [
    FacebookPage,
  ],
  imports: [
    IonicPageModule.forChild(FacebookPage),
  ],
})
export class FacebookPageModule {}
