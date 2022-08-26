import { PrincipalComponent } from './pages/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent },
  {path: 'productos', component: ProductosComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
