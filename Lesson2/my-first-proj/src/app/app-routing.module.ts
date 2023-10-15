import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobileDetailComponent } from './mobile-detail/mobile-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';


const routes: Routes = [
  {path:'products', component:ProductListComponent,
  children:[
    {path:'Mobiles',component:MobilesComponent},
    {path:'Laptops', component:LaptopsComponent},
    {path:'mobile-detail/:id',component:MobileDetailComponent}
  ]
},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginFormComponent},
  {path:'signup', component: SignupComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'pipes', component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
