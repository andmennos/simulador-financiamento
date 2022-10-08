import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AprovadoRoutingModule } from './aprovado-routing.module';
import { AprovadoComponent } from './aprovado.component';

@NgModule({
  declarations: [AprovadoComponent],
  imports: [AprovadoRoutingModule, SharedModule],
})
export class AprovadoModule {}
