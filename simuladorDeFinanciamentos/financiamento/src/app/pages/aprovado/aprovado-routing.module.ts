import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AprovadoComponent } from './aprovado.component';

const routes: Routes = [
  {path:"", component: AprovadoComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprovadoRoutingModule { }
