import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioLogado: any = null;

  constructor() {

    this.setUsuario({
      id: 1,
      nome: 'Janaina',
      email: 'janaina@teste.com'
    });
  }

  setUsuario(usuario: any): void {
    this.usuarioLogado = usuario;
  }

  getUsuario(): any {
    return this.usuarioLogado;
  }

  clearUsuario(): void {
    this.usuarioLogado = null;
  }
}
