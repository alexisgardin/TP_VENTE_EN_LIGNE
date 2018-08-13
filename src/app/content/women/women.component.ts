import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']  
})
export class WomenComponent implements OnInit {

  constructor(readonly itemService : ItemService) { }

  ngOnInit() {
    this.itemService.getItemGenre('F');
  }

}
