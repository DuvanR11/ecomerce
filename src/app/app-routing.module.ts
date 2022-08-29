import { DetalleComponent } from './pages/detalle/detalle.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ForoComponent } from './pages/foro/foro.component';
import { CompraComponent } from './pages/compra/compra.component';
import { ReciboComponent } from './pages/recibo/recibo.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent },
  {path: 'productos', component: ProductosComponent },
  {path: 'detalle', component: DetalleComponent },
  {path: 'compra', component: CompraComponent },
  {path: 'foro', component: ForoComponent },
  {path: 'recibo', component: ReciboComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
