import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerComponent } from './owner/owner.component';
import { TenentComponent } from './tenent/tenent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyFormComponent } from './property-form/property-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyService } from './services/property.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { UserService } from './services/user.service';
import { ViewallComponent } from './viewall/viewall.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    TenentComponent,
    PropertyFormComponent,
    LoginComponent,
    RegisterComponent,
    ViewallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PropertyService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
