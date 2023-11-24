import { Component, OnInit } from '@angular/core';
import { Respuesta, Usuario } from 'src/shared/model/user.interface';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent  implements OnInit{
  usuarios!:Usuario[]
  respuesta!:Respuesta
  

  constructor(private userService:UserService){
    
  }
  
 ngOnInit():void{
  this.getAll();
  }

  getAll(){
    this.userService.getAllUser().subscribe((data) => {
      this.usuarios = data;
    },)
 }

}
