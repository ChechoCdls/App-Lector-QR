import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Componentes
import { ToastController, Platform } from 'ionic-angular';


//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


//servicios
import { HistorialProviders} from '../../providers/historial/historial';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, 
  	private toastCtrl: ToastController, 
    private platform: Platform,
    private _historialProviders:HistorialProviders) {

  }

  scan(){
  	console.log("realizando scan...");

    if(!this.platform.is('cordova')){
      
      this._historialProviders.agregar_historial("http://www.google.cl");

      return;

    }

  	this.barcodeScanner.scan().then((barcodeData) => {
 	// Success! Barcode data is here
 		//console.log("Data del Scan: ", barcodeData);
     console.log("Result: " + barcodeData.text);
     console.log("Format: " + barcodeData.format);
     console.log("Cancelled: " + barcodeData.cancelled);

     if(barcodeData.cancelled == false && barcodeData.text != null){

       this._historialProviders.agregar_historial(barcodeData.text);

     }

	}, (err) => {
    // An error occurred
    	console.log("Error: ", err);
    	this.mostrarError("Error: " + err);
	});
  }

  mostrarError(mensaje:string){

  	let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });

    toast.present();

  }

}
