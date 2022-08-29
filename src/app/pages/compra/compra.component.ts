import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping.cart.service';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  Tienda = true;

  total$ = this.ShoppingCartSvc.totalAction$;
  cart$ = this.ShoppingCartSvc.cartAction$;
  totalP$ = this.ShoppingCartSvc.quatityAction$
  constructor(private ShoppingCartSvc:ShoppingCartService) { }

  ngOnInit(): void {
  }

  onPickupOrDelivery(value: boolean): void {
    this.Tienda = value;
  }
}
