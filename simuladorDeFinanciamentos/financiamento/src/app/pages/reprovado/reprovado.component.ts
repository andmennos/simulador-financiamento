import { Component, OnInit, Injector } from '@angular/core';
import { RecursosBasicosService } from '../shared/services/recursos-basicos.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reprovado',
  templateUrl: './reprovado.component.html',
  styleUrls: ['./reprovado.component.scss'],
})
export class ReprovadoComponent
  extends RecursosBasicosService
  implements OnInit
{
  constructor(injector: Injector, location: Location, router: Router) {
    super(injector, location, router);
  }

  ngOnInit(): void {
    this.geraTitulo(this.imprimeTitulo());
  }

  imprimeTitulo(): string {
    return 'Reprovado';
  }
}
