import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
    private apiURL = 'http://localhost:3000/productos';
  constructor(private http: HttpClient) { }

  getProducts():Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiURL);
}
updateStock(productoId: number, stock: number): Observable<any> {
  const body = { "stock": stock };
  return this.http.patch<any>(`${this.apiURL}/${productoId}`, body);
}
}
