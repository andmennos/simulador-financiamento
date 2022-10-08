import { Router } from '@angular/router';
import { Component, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { RecursosBasicosService } from '../shared/services/recursos-basicos.service';
import { Imovel } from '../imovel/shared/imovel.model';
import { ImovelStorageService } from '../imovel/shared/imovel-storage.service';

@Component({
  selector: 'app-aprovado',
  templateUrl: './aprovado.component.html',
  styleUrls: ['./aprovado.component.scss'],
})
export class AprovadoComponent
  extends RecursosBasicosService
  implements OnInit
{
  imovel: Imovel;
  parcelaInicial: number;
  valorTotalAprovado: number;

  constructor(
    injector: Injector,
    location: Location,
    router: Router,
    public imovelStorageService: ImovelStorageService
  ) {
    super(injector, location, router);
  }

  ngOnInit(): void {
    this.geraTitulo(this.imprimeTitulo());
    this.imovel = this.imovelStorageService.getImovel();
    this.parcelaInicial = this.imovel.parcelaInicial!;
    this.valorTotalAprovado = this.imovel.valorTotalAprovado!;
  }

  imprimeTitulo(): string {
    return 'Aprovado';
  }
}
