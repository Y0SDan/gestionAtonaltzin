import { Component, OnInit } from '@angular/core';
import { CorreoService } from 'src/app/services/correo.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/Models/Cliente';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent{
  cliente = new Cliente()

  constructor(private correoService: CorreoService, private clienteService : ClienteService , private router: Router) { }

  ngOnInit(): void {
  }
cambiarContrasenya()
{
this.correoService.enviarCorreoRecuperarContrasenya(this.cliente).subscribe((resUsuario: any) =>
{
console.log(resUsuario);
},err => console.error(err));
}

}
