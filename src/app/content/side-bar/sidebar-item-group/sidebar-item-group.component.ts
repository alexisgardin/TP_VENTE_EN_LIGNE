import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-sidebar-item-group',
  templateUrl: './sidebar-item-group.component.html',
  styleUrls: ['./sidebar-item-group.component.css'],
  animations: [
    trigger('state', [
      state('collapse', style({
        height:'0px',
        overflow: 'hidden'
      })),
      state('show',   style({
        overflow: 'hidden',
         height:'*'
      })),
      transition('collapse => show', animate('500ms ease-out')),
      transition('show => collapse', animate('500ms ease-out'))
    ])
  ]
})
export class SidebarItemGroupComponent implements OnInit {
  @Input() faIcon:String;
  @Input() name:String;
  state = 'collapse';
  constructor() { }
  toggleState() {
    console.log(this.state)
    this.state = this.state === 'collapse' ? 'show' : 'collapse';
  }


  ngOnInit() {
  }

}
