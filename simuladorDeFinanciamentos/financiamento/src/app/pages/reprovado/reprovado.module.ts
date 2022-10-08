import { NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';

import { ReprovadoRoutingModule } from './reprovado-routing.module';
import { ReprovadoComponent } from './reprovado.component';


@NgModule({
  declarations: [
    ReprovadoComponent
  ],
  imports: [
    SharedModule,
    ReprovadoRoutingModule
  ]
})
export class ReprovadoModule { }
