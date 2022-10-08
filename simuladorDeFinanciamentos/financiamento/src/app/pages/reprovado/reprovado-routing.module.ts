import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReprovadoComponent } from './reprovado.component';

const routes: Routes = [{ path: '', component: ReprovadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReprovadoRoutingModule {}
