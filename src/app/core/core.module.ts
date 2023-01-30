import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// https://stackoverflow.com/questions/62295166/how-to-import-all-angular-material-modules-in-angular-9
import { MaterialModuleModule } from '../material-module/material-module.module';
import { FormComponent } from './form/form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TareasComponent } from './tareas/tareas.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    LoginComponent,
    FormComponent,
    UsuariosComponent,
    TareasComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //
    MaterialModuleModule
  ],
  exports: [
    // TablaComponent,
    LoginComponent,
    FormComponent,
    UsuariosComponent,
    TareasComponent
  ]
})
export class CoreModule { }
