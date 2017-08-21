import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent implements OnInit {

    constructor( public _listaDeseos : ListaDeseosService,
                 public navController: NavController,
                 public detalleComponent: DetalleComponent ) { }

    ngOnInit() { 

    }

    irAgregar(){
        this.navController.push(AgregarComponent);
    }

    verDetalle( lista, id){
        this.navController.push(DetalleComponent,{
            lista: lista,
            id : id
        })
    }

}