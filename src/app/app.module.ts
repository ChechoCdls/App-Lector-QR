import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {GuardadosPage, HomePage, MapaPage, TabsPage} from "../pages/index.paginas";

import { MyApp } from './app.component';

//servicios
import { HistorialProviders} from '../providers/historial/historial';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    GuardadosPage, 
    HomePage, 
    MapaPage, 
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GuardadosPage, 
    HomePage, 
    MapaPage, 
    TabsPage
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProviders,
    InAppBrowser
    
  ]
})
export class AppModule {}
