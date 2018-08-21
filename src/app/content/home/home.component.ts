import { Component, OnInit } from "@angular/core";
import { Item } from "../../model/ItemModel";
import { ItemService } from "../../services/item.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItem();
  }
}
