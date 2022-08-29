import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping.cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  quantity$ = this.shoppingCartSvc.quatityAction$;
  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;

  constructor(private shoppingCartSvc :ShoppingCartService) { }

  ngOnInit(): void {
  }

}
