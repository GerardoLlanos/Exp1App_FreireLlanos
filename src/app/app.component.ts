import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  componentes : Componente[] =[
    {
      icon: 'fish-outline',
      name: 'Información',
      redirecTo: '/informacion-vida-submarina'
    },
    {
      icon: 'cash-outline',
      name: 'Contribuidores',
      redirecTo: '/contribuidores-api'
    },
    {
      icon: 'lock-closed-outline',
      name: 'Administrar Datos',
      redirecTo: '/datos-crud'
    },
   
  ]

}
