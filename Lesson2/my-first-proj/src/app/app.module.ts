import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobileDetailComponent } from './mobile-detail/mobile-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { BindingsComponent } from './bindings/bindings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    MobilesComponent,
    LaptopsComponent,
    MobileDetailComponent,
    LoginFormComponent,
    SignupComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    BindingsComponent,
    PageNotFoundComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
