import { Item } from './../../model/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items : Item[] = [];
  constructor() { }

  ngOnInit() {
    this.items = [{
      nom : 'T-Shirt bugs Bunny',
      image : './assets/images/item/item1.jpeg',
      prix : 14.99
    },{
      nom : 'T-Shirt Damier',
      image : './assets/images/item/item2.jpeg',
      prix : 6.99
    },{
      nom : 'T-Shirt Chill',
      image : './assets/images/item/item3.jpeg',
      prix : 23.99
    },{
      nom : 'Robe Fleur',
      image : './assets/images/item/item4.jpeg',
      prix : 78.99
    },{
      nom : 'Chemise colore',
      image : './assets/images/item/item5.jpeg',
      prix : 53.99
    },{
      nom : 'Debardeur rouge',
      image : './assets/images/item/item6.jpeg',
      prix : 24.99
    }]
  }

}
