import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

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
  ];

  constructor(private menuController: MenuController, private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async onLogout(){
    try{
      const user = await this.authSvc.logout();
      this.router.navigate(['login']);
    }
    catch(error){console.log('Error', error);}
  }

}
