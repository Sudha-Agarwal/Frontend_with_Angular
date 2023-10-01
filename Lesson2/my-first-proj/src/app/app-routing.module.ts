import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobileDetailComponent } from './mobile-detail/mobile-detail.component';


const routes: Routes = [
  {path:'products', component:ProductListComponent,
  children:[
    {path:'Mobiles',component:MobilesComponent},
    {path:'Laptops', component:LaptopsComponent},
    {path:'mobile-detail/:id',component:MobileDetailComponent}
  ]
},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
