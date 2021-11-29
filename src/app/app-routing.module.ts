import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';
import { InicioPageModule } from './pages/inicio/inicio.module';



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['formulario']);
const redirectLoggedInToSendEmail = () => redirectLoggedInTo(['inicio']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'inicio', 
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'contribuidores-api',
    loadChildren: () => import('./pages/contribuidores-api/contribuidores-api.module').then( m => m.ContribuidoresApiPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'informacion-vida-submarina',
    loadChildren: () => import('./pages/informacion-vida-submarina/informacion-vida-submarina.module').then( m => m.InformacionVidaSubmarinaPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'datos-crud',
    loadChildren: () => import('./pages/datos-crud/datos-crud.module').then( m => m.DatosCrudPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

