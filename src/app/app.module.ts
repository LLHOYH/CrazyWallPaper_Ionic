import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { Base64 } from '@ionic-native/base64/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

import { IonicImageLoader } from 'ionic-image-loader';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    PinchZoomModule,
    IonicImageLoader.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PhotoViewer,
    Base64,
    Base64ToGallery,
    WebView,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
