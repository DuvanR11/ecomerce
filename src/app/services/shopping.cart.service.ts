import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Producto } from "src/app/interfaces/producto.interface";

@Injectable(
  {
    providedIn: "root",
  }
)

export class ShoppingCartService {
  products: Producto[] = []
  private cartSubject = new BehaviorSubject<Producto[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private quatitySubject = new BehaviorSubject<number>(0);

  get cartAction$(): Observable<Producto[]> {
    return this.cartSubject.asObservable();
  }

  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  get quatityAction$(): Observable<number> {
    return this.quatitySubject.asObservable();
  }


  updateCart(product: Producto): void{
    this.addTocart(product);
    this.calcTotal();
    this.quatityProduct();
  }

  resetCart(): void {
    this.cartSubject.next([]);
    this.totalSubject.next(0);
    this.quatitySubject.next(0);
    this.products = [];
  }

  private addTocart(product : Producto):void {
    const isProductInCart = this.products.find(({id})=>id == product.id);
    if (isProductInCart){
      isProductInCart.cantidad += 1
    }else{
      this.products.push({...product, cantidad:1});
    }
    this.cartSubject.next(this.products);
  }

  private calcTotal(): void{
    const total = this.products.reduce((total, product) => total += (product.valor * product.cantidad), 0);
    this.totalSubject.next(total);
  }

  // private TotalProductos(): void{
  //   const total = this.products.reduce((total, product) => total += (product.valor * product.cantidad), 0);
  //   this.totalSubject.next(total);
  // }

  private quatityProduct(): void {
    const quatity = this.products.reduce((total, product) => total += product.cantidad, 0);
    this.quatitySubject.next(quatity);
  }
}
