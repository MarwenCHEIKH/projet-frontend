import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';
import { CreateVfdComponent } from './pages/vfd/manage-vfd/create-vfd/create-vfd.component';
import { MoveVfdComponent } from './pages/vfd/manage-vfd/move-vfd/move-vfd.component';
import { UpdateVfdComponent } from './pages/vfd/manage-vfd/update-vfd/update-vfd.component';
import { DeleteVfdComponent } from './pages/vfd/manage-vfd/delete-vfd/delete-vfd.component';
import { ManageVfdComponent } from './pages/vfd/manage-vfd/manage-vfd.component';
import { ManageModelsComponent } from './pages/models/manage-models/manage-models.component';
import { CreateModelComponent } from './pages/models/manage-models/create-model/create-model.component';
import { UpdateModelComponent } from './pages/models/manage-models/update-model/update-model.component';
import { DeleteModelComponent } from './pages/models/manage-models/delete-model/delete-model.component';
import { DeleteParamsComponent } from './pages/models/manage-models/update-model/delete-params/delete-params.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'manage-vfd',
    component: ManageVfdComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'create-vfd',
        component: CreateVfdComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'update-vfd',
        component: UpdateVfdComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'move-vfd',
        component: MoveVfdComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'delete-vfd',
        component: DeleteVfdComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'manage-models',
    component: ManageModelsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'create-model',
        component: CreateModelComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'update-model/modify',
        component: UpdateModelComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'update-model/delete',
        component: DeleteParamsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'delete-model',
        component: DeleteModelComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
