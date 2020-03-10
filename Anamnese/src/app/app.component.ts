import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'login'
    }
  ];

  showSplash = true;

  constructor(
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();

      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString("#05c7bd");
      }

      if (this.platform.is('ios')) {
        this.statusBar.backgroundColorByHexString("#05c7bd");
      }

      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false);
    });
  }
}
