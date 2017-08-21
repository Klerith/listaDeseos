import { Component, OnInit } from '@angular/core';
import { Lista } from '../../app/clases/listas';
import { ListaItem } from '../../app/clases/lista-item';
import { AlertController, NavController } from 'ionic-angular'
import { ListaDeseosService } from '../../app/services/lista-deseos.service'

@Component({
    selector: 'selector',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {

    nombreLista:string ='';
    nombreItem:string = '';

    items:ListaItem []  = [];

    constructor(public alertController: AlertController,
                public navController: NavController,
                public _listaDeseosService: ListaDeseosService  ) { }

    ngOnInit() { 

    }

    agregar(){
        if(this.nombreItem.length == 0){
            return '';
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;
        this.items.push(item)
        console.log(this.items);
        this.nombreItem = '';

    }


    borrar(index: number){
        this.items.splice(index,1);
    }


    guardarLista(){
        if( this.nombreLista.length == 0 ) {
            let alert = this.alertController.create({
                title: 'Nombre de la lista necesario',
                subTitle: 'Se necesita un nombre para la lista!',
                buttons: ['OK']
            });
            
            alert.present();
            return ;
        }

        let lista = new Lista(this.nombreLista);
        lista.items = this.items;

        // this._listaDeseosService.listas.push( lista );
        this._listaDeseosService.agregarLista(lista);
        this.navController.pop();
    }
}



