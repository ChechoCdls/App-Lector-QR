import { Component } from '@angular/core';


import { HistorialProviders} from '../../providers/historial/historial';

import { ScanData } from "../../models/scan-data.model";


@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

	historial: ScanData[] = [];

  constructor(private _historialProviders:HistorialProviders) {
  }

  ionViewDidLoad() {
    this.historial = this._historialProviders.cargar_historial();
  }


  abrir_scan(index:number){

  	this._historialProviders.abrir_scan(index);

  }

}
