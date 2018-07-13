import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { FacebookPage } from '../pages/facebook/facebook';
import { PinterestPage } from '../pages/pinterest/pinterest';
import { NotificationPage } from '../pages/notification/notification';
import { TablePage } from '../pages/table/table';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    FacebookPage,
    PinterestPage,
    NotificationPage,
    TablePage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    FacebookPage,
    PinterestPage,
    NotificationPage,
    TablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
