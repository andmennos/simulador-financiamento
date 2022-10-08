import { AbstractControl } from '@angular/forms';

export class ImovelValidacoes {
  static maximoParcelas(control: AbstractControl) {
    const parcelas = control.value;

    if (parcelas <= 360) return null;

    return { parcelaMaxima: true };
  }

  static valorEntradaMinima(control: AbstractControl) {
    const percentualMinimo = 20;
    const valorImovelCliente = control.parent?.get('valorImovel')?.value;
    const valorEntradaCliente = control.parent?.get('valorEntrada')?.value;
    const entradaMinima = (valorImovelCliente / 100) * percentualMinimo;

    if (valorEntradaCliente < entradaMinima)
      return { entradaInsuficiente: true };
    else {
      return null;
    }
  }
}
