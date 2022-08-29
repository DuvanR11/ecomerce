
import { Producto } from './../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DetailsOrder, Order } from '../interfaces/order.interface';


@Injectable({
  providedIn: 'root',
})
export class DataService{
  private apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

    getProducts(): Observable<Producto[]>{
      return this.http.get<Producto[]>(`${this.apiURL}/productos`)
    }

    saveOrder(order: Order): Observable<Order>{
      return this.http.post<Order>(`${this.apiURL}/orders`, order)
    }

    saveDetailsOrder(details: DetailsOrder): Observable<DetailsOrder>{
      return this.http.post<DetailsOrder>(`${this.apiURL}/detailsOrders`, details)
    }
}

