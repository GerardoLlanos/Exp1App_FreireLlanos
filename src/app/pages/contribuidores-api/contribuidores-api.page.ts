import { Datos } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-contribuidores-api',
  templateUrl: './contribuidores-api.page.html',
  styleUrls: ['./contribuidores-api.page.scss'],
})
export class ContribuidoresApiPage implements OnInit {

  //objeto tipo arreglo de la interfaz Article
  datos: Datos[] = [];

  constructor(private json:JsonService) { }

  ngOnInit() {
    this.json.obtenerDatos().subscribe(tasks=>{
      this.datos = tasks;
    })
  }
}
