import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { BorrarComponent } from './vistas/borrar/borrar.component';
import { VerTablaComponent} from './vistas/ver-tabla/ver-tabla.component'


const routes: Routes = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'nuevo', component:NuevoComponent},
  {path:'editar', component:EditarComponent},
  {path:'borrar', component:BorrarComponent},
  {path:'ver-tabla', component:VerTablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NuevoComponent,EditarComponent,BorrarComponent,VerTablaComponent] //se hace por buena practica crear esta constante con los componentes