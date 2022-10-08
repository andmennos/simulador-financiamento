import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'dados-do-proponente',
    loadChildren: () =>
      import('./pages/proponente/proponente.module').then(
        (m) => m.ProponenteModule
      ),
  },
  {
    path: 'dados-do-imovel',
    loadChildren: () =>
      import('./pages/imovel/imovel.module').then((m) => m.ImovelModule),
  },
  {
    path: 'aprovado',
    loadChildren: () =>
      import('./pages/aprovado/aprovado.module').then((m) => m.AprovadoModule),
  },
  {
    path: 'reprovado',
    loadChildren: () =>
      import('./pages/reprovado/reprovado.module').then(
        (m) => m.ReprovadoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
