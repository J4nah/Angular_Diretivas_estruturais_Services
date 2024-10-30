import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {
  clientes: any[] = []; // Lista de todos os clientes
  clienteSelecionado: any = null; // Cliente selecionado
  isCollapsed = true; // Estado inicial do colapso

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getTodosClientes();
  }

  // Método para buscar todos os clientes
  getTodosClientes(): void {
    this.clienteService.getClientes().subscribe(
      (data) => {
        this.clientes = data; // Armazena a lista de clientes
      },
      (error) => {
        console.error('Erro ao buscar clientes:', error);
      }
    );
  }

  // Método para buscar um cliente específico por ID
  getClienteById(id: number): void {
    this.clienteService.getCliente(id).subscribe(
      (data) => {
        this.clienteSelecionado = data; // Armazena o cliente selecionado
      },
      (error) => {
        console.error('Erro ao buscar cliente por ID:', error);
      }
    );
  }

  // Método para atualizar o cliente selecionado
  atualizaCliente(id: number, cliente: any): void {
    this.clienteService.atualizaCliente(id, cliente).subscribe(
      (data) => {
        console.log('Cliente atualizado com sucesso:', data);
        this.getTodosClientes(); // Atualiza a lista de clientes
        this.clienteSelecionado = data; // Atualiza a exibição do cliente
      },
      (error) => {
        console.error('Erro ao atualizar cliente:', error);
      }
    );
  }

  // Método para excluir um cliente específico
  excluiCliente(id: number): void {
    this.clienteService.excluiCliente(id).subscribe(
      () => {
        console.log('Cliente excluído com sucesso');
        this.getTodosClientes(); // Atualiza a lista de clientes após exclusão
        this.clienteSelecionado = null; // Limpa a seleção do cliente
      },
      (error) => {
        console.error('Erro ao excluir cliente:', error);
      }
    );
  }
}
