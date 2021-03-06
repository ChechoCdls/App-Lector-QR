
import { Injectable } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser';


import { ScanData } from "../../models/scan-data.model";




@Injectable()
export class HistorialProviders {

	private _historial:ScanData[] = [];

  constructor(private iab: InAppBrowser) {
    
  }

  //insertar elemento al arreglo _historial
  agregar_historial( texto:string ){

  	let data = new ScanData( texto );

  	this._historial.unshift(data);

  	console.log(this._historial);

  	this.abrir_scan(0);

  }

  abrir_scan(index:number){

  	let scanData = this._historial[index];
  	console.log(scanData);

  	switch (scanData.tipo) {
  		case "http":
  			this.iab.create(scanData.info, "_system");
  			break;
  		
  		default:
  			console.error("Tipo no soportado");
  			break;
  	}

  }

  cargar_historial(){
  	return this._historial;
  }

}
