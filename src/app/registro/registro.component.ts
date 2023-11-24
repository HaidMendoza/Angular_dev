import { Component,OnInit } from '@angular/core';
import { FormsModule,FormControl,Validator, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{
  form!: FormGroup;

  constructor(private userService: UserService , private fb: FormBuilder) {
    this.form = fb.group({
      name: ['' , Validators.required],
      job: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }



enviarDatos(){
  if(this.form.valid){
    this.userService.createUser(this.form.value).subscribe(dato =>{
      console.log(this.form.value)
      this.form.reset();
    })
  }
}
}
