import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { CreateVfdComponent } from './pages/vfd/manage-vfd/create-vfd/create-vfd.component';
import { UpdateVfdComponent } from './pages/vfd/manage-vfd/update-vfd/update-vfd.component';
import { MoveVfdComponent } from './pages/vfd/manage-vfd/move-vfd/move-vfd.component';
import { DeleteVfdComponent } from './pages/vfd/manage-vfd/delete-vfd/delete-vfd.component';
import { VFDToolbarComponent } from './pages/vfd/vfd-toolbar/vfd-toolbar.component';
import { ManageVfdComponent } from './pages/vfd/manage-vfd/manage-vfd.component';
import { ManageModelsComponent } from './pages/models/manage-models/manage-models.component';
import { CreateModelComponent } from './pages/models/manage-models/create-model/create-model.component';
import { UpdateModelComponent } from './pages/models/manage-models/update-model/update-model.component';
import { DeleteModelComponent } from './pages/models/manage-models/delete-model/delete-model.component';
import { ModelsToolbarComponent } from './pages/models/models-toolbar/models-toolbar.component';

import { DeleteParamsComponent } from './pages/models/manage-models/update-model/delete-params/delete-params.component';
import { RulesComponent } from './pages/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    HomeComponent,
    CreateVfdComponent,
    UpdateVfdComponent,
    MoveVfdComponent,
    DeleteVfdComponent,
    VFDToolbarComponent,
    ManageVfdComponent,
    ManageModelsComponent,
    CreateModelComponent,
    UpdateModelComponent,
    DeleteModelComponent,
    ModelsToolbarComponent,

    DeleteParamsComponent,
     RulesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
