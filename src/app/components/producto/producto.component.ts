import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  @Input() product!: Producto;
  @Output() addToCartClick = new EventEmitter<Producto>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    console.log("Click", this.product)
    this.addToCartClick.emit(this.product);

}
}
