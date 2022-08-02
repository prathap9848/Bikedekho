import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { BuyComponent } from './services/buy/buy.component';
import { SellComponent } from './services/sell/sell.component';
import { NewlaunchedComponent } from './services/newlaunched/newlaunched.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ContactusComponent,
    ServicesComponent,
    BuyComponent,
    SellComponent,
    NewlaunchedComponent,
    SigninComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
