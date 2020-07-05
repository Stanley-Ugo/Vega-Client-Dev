import { AdminComponent } from './admin/admin.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from './services/admin-auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'vehicles/', pathMatch: 'full'},
  { path: 'vehicles/new', component: VehicleFormComponent},
  { path: 'vehicles/edit/:id', component: VehicleFormComponent},
  { path: 'vehicles/:id', component: ViewVehicleComponent},
  { path: 'vehicles', component: VehicleListComponent},
  { path: 'admin', component: AdminComponent, canActivate: [ AdminAuthGuard ]},
  { path : 'home', component: HomeComponent},
  { path : '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
