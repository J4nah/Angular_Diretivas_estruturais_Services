import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {
  clientes: any[] = [];
  clienteSelecionado: any = null;
  isCollapsed = true;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getTodosClientes();
  }


  getTodosClientes(): void {
    this.clienteService.getClientes().subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) => {
        console.error('Erro ao buscar clientes:', error);
      }
    );
  }


  getClienteById(id: number): void {
    this.clienteService.getCliente(id).subscribe(
      (data) => {
        this.clienteSelecionado = data;
      },
      (error) => {
        console.error('Erro ao buscar cliente por ID:', error);
      }
    );
  }


  atualizaCliente(id: number, cliente: any): void {
    this.clienteService.atualizaCliente(id, cliente).subscribe(
      (data) => {
        console.log('Cliente atualizado com sucesso:', data);
        this.getTodosClientes();
        this.clienteSelecionado = data;
      },
      (error) => {
        console.error('Erro ao atualizar cliente:', error);
      }
    );
  }


  excluiCliente(id: number): void {
    this.clienteService.excluiCliente(id).subscribe(
      () => {
        console.log('Cliente excluído com sucesso');
        this.getTodosClientes();
        this.clienteSelecionado = null;
      },
      (error) => {
        console.error('Erro ao excluir cliente:', error);
      }
    );
  }
}
