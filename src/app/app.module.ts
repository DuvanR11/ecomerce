import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// componentes de material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {MatCardModule} from '@angular/material/card';
import { BodyComponent } from './pages/body/body.component';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './components/nav/nav.component';
import {MatBadgeModule} from '@angular/material/badge';
import { SecProductosComponent } from './components/sec-productos/sec-productos.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForoComponent } from './pages/foro/foro.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { CompraComponent } from './pages/compra/compra.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReciboComponent } from './pages/recibo/recibo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ProductosComponent,
    DetalleComponent,
    ProductoComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    BodyComponent,
    NavComponent,
    SecProductosComponent,
    ForoComponent,
    ComentarioComponent,
    CompraComponent,
    ReciboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
