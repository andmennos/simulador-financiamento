import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProponenteRoutingModule } from './proponente-routing.module';
import { ProponenteFormComponent } from './proponente-form/proponente-form.component';

@NgModule({
  declarations: [ProponenteFormComponent],
  imports: [SharedModule, ProponenteRoutingModule],
})
export class ProponenteModule {}
