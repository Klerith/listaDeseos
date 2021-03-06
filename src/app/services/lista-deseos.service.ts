import { Injectable } from '@angular/core';
import { Lista } from '../../app/clases/listas'


@Injectable()
export class ListaDeseosService {
    
    listas: Lista[] = [];

    constructor( ) { 

        this.cargarData();
        console.log(this.listas);
    }

    actualizarData(){
        localStorage.setItem("data", JSON.stringify(this.listas) );
    }

    cargarData(){
        if(localStorage.getItem("data")) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    }

    agregarLista( lista: Lista){
        this.listas.push(lista);
        this.actualizarData();

    }
}