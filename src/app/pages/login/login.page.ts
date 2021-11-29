import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc:AuthService, private router:Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Error al iniciar sesión',
      message: 'Pruebe de nuevo cambiando los datos de inicio',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if(user){
        this.router.navigate(['inicio']);
      }
      else{
        this.presentAlert();
      }
    }
    catch(error){console.log('Error', error);}
  }

  async onLoginGoogle(email, password){
    try{
      const user = await this.authSvc.loginGoogle();
      if(user){
        this.router.navigate(['inicio']);
      }
      else{
        this.presentAlert();
      }
    }
    catch(error){console.log('Error', error);}
  }
}

