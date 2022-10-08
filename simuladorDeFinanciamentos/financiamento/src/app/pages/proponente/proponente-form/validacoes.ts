import { AbstractControl } from "@angular/forms";

export class ProponenteValidacoes {

  static menorIdade (control: AbstractControl): any{

    const dt = control.parent?.get('data')?.value

    const dtFomatado = Date.parse(dt);
    const dtFomatadoNum = Number(dtFomatado)
    const dataHoje = Date.now();

    const calcData = dataHoje - dtFomatadoNum;
    const dezoitoAnos = 567648000000;

    if(calcData <= dezoitoAnos)
      return {menorIdade: true};
    else{
      return null;
    }
  }

  static valorEntradaMinima(control: AbstractControl){
    const percentualMinimo = 20;
    const valorImovelCliente = control.parent?.get('valorImovel')?.value;
    const valorEntradaCliente = control.parent?.get('valorEntrada')?.value;
    const entradaMinima = valorImovelCliente / 100 * percentualMinimo;

    if(valorEntradaCliente < entradaMinima)
      return { entradaInsuficiente: true}
    else{
      return null;
    }

  }

}
