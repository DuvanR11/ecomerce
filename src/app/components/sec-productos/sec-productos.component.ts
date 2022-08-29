import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { ShoppingCartService } from 'src/app/services/shopping.cart.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-sec-productos',
  templateUrl: './sec-productos.component.html',
  styleUrls: ['./sec-productos.component.scss']
})
export class SecProductosComponent implements OnInit {
  products !: Producto[]
  constructor(private productSvc: ProductoService, private ShoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap((products: Producto[]) => this.products = products)
    )
    .subscribe()
  }

  addToCart(product: Producto): void {
    console.log('add to cart', product);
    this.ShoppingCartSvc.updateCart(product)
  }

}
