import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: '/register',
    component: RegistroComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
