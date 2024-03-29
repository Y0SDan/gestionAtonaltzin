import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { 
    //localStorage.setItem('TipoUsuario', "Admin");
    //localStorage.setItem('Usuario', "correo");
    //localStorage.setItem('Email', "correo");
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.carousel').carousel();
    });
    $(document).ready(function(){
      $('.slider').slider();
    });

    $('.dropdown-trigger').dropdown();
  }

}

