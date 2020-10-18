import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
