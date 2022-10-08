import { Injectable, Injector} from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecursosBasicosService {

  public recursosFormulario: FormGroup;

  tituloPagina: string;
  enviarForm: boolean = false;
  rota: string = "";
  aprovacao: boolean;

  constructor(
    protected injector: Injector,
    protected location: Location,
    protected router: Router
    ) {  }

  public geraTitulo(imprimePagina:string) {
    const url = this.location.path();

    if (url == "/home"){
      this.tituloPagina = imprimePagina;
    }
    if (url == "/dados-do-proponente"){
      this.tituloPagina = imprimePagina;
    }
    if (url =="/dados-do-imovel"){
      this.tituloPagina = imprimePagina;
    }
    if (url == "/aprovado"){
      this.tituloPagina = imprimePagina;
    }
    if (url == "/reprovado"){
      this.tituloPagina = imprimePagina;
    }
  }

}
