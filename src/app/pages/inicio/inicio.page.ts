import { Component, OnInit } from '@angular/core';

interface Componentes{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  componentes : Componentes[] = [
    {
      icon: 'fish-outline',
      name: 'Información',
      redirecTo: '/descripcion'
    },
    {
      icon: 'person-outline',
      name: 'Registrarse',
      redirecTo: '/formulario'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
