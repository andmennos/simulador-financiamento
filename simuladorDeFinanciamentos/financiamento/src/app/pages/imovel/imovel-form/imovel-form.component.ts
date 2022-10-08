import { Imovel } from './../shared/imovel.model';
import { ImovelStorageService } from './../shared/imovel-storage.service';
import { RecursosBasicosService } from './../../shared/services/recursos-basicos.service';
import { ImovelValidacoes } from './imovel-validacoes';
import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imovel-form',
  templateUrl: './imovel-form.component.html',
  styleUrls: ['./imovel-form.component.scss'],
})
export class ImovelFormComponent
  extends RecursosBasicosService
  implements OnInit
{
  enviarFormulario: any;

  imaskRenda = {
    mask: '00000,00',
  };

  imaskImovel = {
    mask: '0000000,00',
  };

  imaskParcela = {
    mask: '000',
  };

  constructor(
    injector: Injector,
    location: Location,
    router: Router,
    public formBuilder: FormBuilder,
    public imovelStorage: ImovelStorageService
  ) {
    super(injector, location, router);
  }

  ngOnInit(): void {
    this.geraTitulo(this.imprimeTitulo());
    this.geraRecursoForm();
  }

  public geraRecursoForm() {
    this.recursosFormulario = this.formBuilder.group({
      id: [null],
      tipo: [null, [Validators.required]],
      renda: [null, [Validators.required]],
      valorImovel: [null, [Validators.required]],
      valorEntrada: [
        null,
        [Validators.required, ImovelValidacoes.valorEntradaMinima],
      ],
      parcelas: [null, [Validators.required, ImovelValidacoes.maximoParcelas]],
    });
  }

  imprimeTitulo(): string {
    return 'Dados do Imóvel';
  }

  public validaSimulacao() {
    const imovel: Imovel = new Imovel(); /*
      this.recursosFormulario?.get('tipo')?.value,
      this.recursosFormulario?.get('renda')?.value,
      this.recursosFormulario?.get('valorImovel')?.value,
      this.recursosFormulario?.get('valorEntrada')?.value,
      this.recursosFormulario?.get('parcelas')?.value
      */
    const percentualMinimo = 30;
    const taxaAnoNaoCorrentista = 0.08;
    // Validação Renda Mínimma
    const valorTotalAprovado =
      Number(imovel.valorImovel!) - Number(imovel.valorEntrada!);
    const comJuros =
      valorTotalAprovado * taxaAnoNaoCorrentista + valorTotalAprovado!;
    const resultado = comJuros / Number(imovel.parcelas!);
    const rendaMinima = (Number(imovel.renda!) / 100) * percentualMinimo;
    //Validação Parcela
    const parcelaDoze = Number(imovel.parcelas) / 12;
    const taxaParcela = taxaAnoNaoCorrentista * parcelaDoze;
    const somaCem = 100 + taxaParcela;
    const dividePorCem = somaCem / 100;
    const valorTotalAprovadoMulti = valorTotalAprovado * dividePorCem;
    const calculoFinal = valorTotalAprovadoMulti / Number(imovel.parcelas);

    imovel.parcelaInicial = calculoFinal;
    imovel.valorTotalAprovado = valorTotalAprovado;
    this.imovelStorage.setImovel(imovel);

    if (resultado <= rendaMinima) {
      this.aprovacao = true;
      return (this.enviarFormulario = this.botaoSalvar());
    } else {
      this.aprovacao = false;
      return (this.enviarFormulario = this.botaoSalvar());
    }
  }

  public botaoSalvar() {
    if (this.aprovacao) {
      return this.rotaParaAprovacaoAprovada();
    } else {
      return this.rotaParaAprovacaoReprovada();
    }
  }

  public rotaParaAprovacaoReprovada() {
    return this.router.navigate(['/reprovado']);
  }

  public rotaParaAprovacaoAprovada() {
    return this.router.navigate(['/aprovado']);
  }
}
