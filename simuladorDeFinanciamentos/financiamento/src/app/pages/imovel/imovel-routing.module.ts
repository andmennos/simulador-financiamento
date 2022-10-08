import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImovelFormComponent } from './imovel-form/imovel-form.component';


const routes: Routes = [
  {path: "", component: ImovelFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImovelRoutingModule { }
