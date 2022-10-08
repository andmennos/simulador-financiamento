import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProponenteFormComponent } from './proponente-form/proponente-form.component';
import { ImovelFormComponent } from '../imovel/imovel-form/imovel-form.component';

const routes: Routes = [{ path: '', component: ProponenteFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProponenteRoutingModule {}
