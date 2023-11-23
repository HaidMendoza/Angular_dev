import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent {

  color : String = "";
  habilator:boolean=false;
  Image:string="";




  MostrarImagen(){
    this.Image = "https://api.fifa.com/api/v3/picture/flags-sq-2/CRO?tx=c_fill,g_auto,q_auto,w_70,h_46";
  }
  MostrarImagenes(){
    this.Image ="https://www.lavanguardia.com/andro4all/hero/2023/01/Fondos-de-pantalla-para-movil.jpg?width=768&aspect_ratio=16:9"

  }
  cambiarRojo(){
    this.color="rojo";
  }
  cambiarVerde(){
    this.color="verde";
  }
  cambiarAzul(){
    this.color="azul"; 
  }
  habilitar(){
    this.habilator =!this.habilator
  }
}
