import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { FacebookPage } from '../pages/facebook/facebook';
import { PinterestPage } from '../pages/pinterest/pinterest';
import { NotificationPage } from '../pages/notification/notification';
import { TablePage } from '../pages/table/table';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Skeleton Loader', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Detail', component: DetailPage },
      { title: 'Facebook', component: FacebookPage },
      { title: 'Pinterest', component: PinterestPage },
      { title: 'Notification', component: NotificationPage },
      { title: 'Table', component: TablePage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
