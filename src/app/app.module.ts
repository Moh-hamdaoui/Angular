import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*il faut importer chaque module ajouter*/
import { HttpClientModule } from '@angular/common/http';
//impoter le service pour l'utiliser, (ce n'est pas obligatoir de declarer le service dans provider)
import { ProductService } from './services/product.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //ce n'est pas obligatoire de declarer le service
  providers: [ProductService],
  bootstrap: [AppComponent],

})
export class AppModule { }
