import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [{path: 'accueil', component: AccueilComponent},{path: 'produits',component: ProduitsComponent}];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProduitsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
