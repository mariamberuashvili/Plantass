import { Routes } from '@angular/router';

import { AltaComponent } from './plantas/alta/alta.component';
import { DetalleComponent } from './plantas/detalle/detalle.component';
import { ConsultaComponent } from './plantas/consulta/consulta.component';

import { NotfoundComponent } from './plantillas/notfound/notfound.component';

export const routes: Routes = [
 { path: 'alta', component: AltaComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'notfound', component: NotfoundComponent } , 

  {
    path: '**',
    pathMatch: 'full',
    redirectTo:'header'
  }

];
