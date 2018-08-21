import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/ItemModel';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  constructor(readonly itemService : ItemService) { }

  ngOnInit() {
    this.itemService.getItemGenre("M");
  }
}
