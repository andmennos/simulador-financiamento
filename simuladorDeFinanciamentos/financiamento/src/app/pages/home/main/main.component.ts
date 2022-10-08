import { Component, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { RecursosBasicosService } from '../../shared/services/recursos-basicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent extends RecursosBasicosService {
  constructor(
    protected injetor:Injector,
    protected local:Location,
    router: Router,
    ){
    super(injetor, local, router)
  }

  imprimeTitulo():string {
    return 'Tela Inicial'
  }

  ngOnInit(){
    this.geraTitulo(this.imprimeTitulo())
  }

}
