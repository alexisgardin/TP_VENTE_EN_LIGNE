import { ItemService } from '../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})
export class KidComponent implements OnInit {
  items : Item[];
  constructor(readonly itemService : ItemService) { }

  ngOnInit() {
    this.itemService.getItem();
  }

}
