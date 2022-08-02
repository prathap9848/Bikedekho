import { EmptyExpr } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BuyComponent } from './services/buy/buy.component';
import { NewlaunchedComponent } from './services/newlaunched/newlaunched.component';
import { SellComponent } from './services/sell/sell.component';
import { ServicesComponent } from './services/services.component';
import { SigninComponent } from './signin/signin.component';



const routes: Routes = [
 {path:"home",component:HomeComponent},
 {path:"contactus",component:ContactusComponent},
 {path:"register",component:RegisterComponent},
{path:"signin",component:SigninComponent},
 {path:"services",component:ServicesComponent,children:[
  {path:"sell",component:SellComponent},
  {path:"buy",component:BuyComponent},
  {path:"launched",component:NewlaunchedComponent}
 ]},
 
 {path:'',redirectTo:'home',pathMatch:'full'}
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
