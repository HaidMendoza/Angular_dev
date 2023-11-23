import { Component,OnInit } from '@angular/core';
import { FormsModule,FormControl,Validator, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
 Registro = new FormGroup({
    'name': new FormControl("",Validators.required),
    'job' : new FormControl("",Validators.required)
});
job:Boolean=true;

enviarDatos(){
  console.log(this.Registro.value);
}
}
