import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ColaboratorComponent } from './components/pages/colaborator/colaborator.component';
import { FormLinkComponent } from './components/form-link/form-link.component';
import { LinksComponent } from './components/pages/links/links.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { SpecialtiesComponent } from './components/pages/specialties/specialties.component';
import { FormSpecialtiesComponent } from './components/form-specialties/form-specialties.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ColaboratorComponent,
    FormLinkComponent,
    LinksComponent,
    RegisterComponent,
    FormRegisterComponent,
    SpecialtiesComponent,
    FormSpecialtiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
