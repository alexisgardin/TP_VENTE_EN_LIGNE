import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module'; //On importe le module dans le module principale
import { ContentModule } from './content/content.module';
import { ItemListModule } from './content/item-list/item-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NavBarModule,ContentModule,ItemListModule //On oublie pas de le rajouter dans les imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
