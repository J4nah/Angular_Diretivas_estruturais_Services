import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {
  usuarioLogado: any;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioLogado = this.usuarioService.getUsuario();
  }
}

