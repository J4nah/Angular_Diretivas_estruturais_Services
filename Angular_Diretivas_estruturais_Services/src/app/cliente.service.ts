import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'; // URL da API

  constructor(private http: HttpClient) {}

  // Busca todos os clientes
  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Busca cliente por ID
  getCliente(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Exclui cliente por ID
  excluiCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Atualiza cliente
  atualizaCliente(id: number, cliente: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, cliente);
  }
}
