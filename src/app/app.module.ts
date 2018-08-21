import { AddItemModule } from './add-item/add-item.module';

import { ItemService } from "./services/item.service";
import { AngularFirestore } from "angularfire2/firestore";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavBarModule } from "./nav-bar/nav-bar.module"; //On importe le module dans le module principale
import { ContentModule } from "./content/content.module";
import { ItemListModule } from "./content/item-list/item-list.module";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
const config = {
  apiKey: "AIzaSyBnEmoxIYiGSWxvHTtj36ToKuv_GuGbkfE",
  authDomain: "tp-vente-en-ligne.firebaseapp.com",
  databaseURL: "https://tp-vente-en-ligne.firebaseio.com",
  projectId: "tp-vente-en-ligne",
  storageBucket: "tp-vente-en-ligne.appspot.com",
  messagingSenderId: "905852038075"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    BrowserModule,
    NavBarModule,
    ContentModule,
    ItemListModule //On oublie pas de le rajouter dans les imports
  ],
  providers: [AngularFirestore, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
