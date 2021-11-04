import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private authSvc:AuthService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'REGISTRO EXITOSO',
      subHeader: 'Se completó tu registro',
      message: 'Puedes inicar sesión mediante el link de la zona inferior',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async errorAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error al registrarse',
      subHeader: 'Recuerda:',
      message: 'Ingresar un correo válido, una contraseña de más de 6 carácteres y no poseer una cuenta con el mismo correo',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async onRegister(email, password){
    try{
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        this.presentAlert();
      }else{
        this.errorAlert();
      }
    }
    catch(error){console.log('Error', error);}
  }

}
