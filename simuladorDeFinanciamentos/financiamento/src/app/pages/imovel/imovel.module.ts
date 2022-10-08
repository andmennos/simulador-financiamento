import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ImovelRoutingModule } from './imovel-routing.module';
import { ImovelFormComponent } from './imovel-form/imovel-form.component';



@NgModule({
  declarations: [
    ImovelFormComponent
  ],
  imports: [
    SharedModule,
    ImovelRoutingModule
  ],
  exports:[
    SharedModule
  ]
})
export class ImovelModule { }
