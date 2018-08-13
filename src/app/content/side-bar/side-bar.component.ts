import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('heroState', [
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
    ]),
    trigger('reduceState', [
      state('true', style({
        width:'80px',
        overflow: 'hidden'
      })),
      state('false',   style({
        width:'250px'
      })),
      transition('true => false', animate('500ms ease-out')),
      transition('false => true', animate('500ms ease-in'))
    ])
  ]
})
export class SideBarComponent implements OnInit {
  @Input()size:String
  @Input()class:String
  @Input()reduce = false;
  isClick = true;
  state = 'collapse'
  constructor( ) { }
  toggleState() {
    console.log(this.state)
    this.state = this.state === 'collapse' ? 'show' : 'collapse';
  }
  ngOnInit() {
  }
  clickReduce(){
    console.log(this.reduce);
    this.reduce=!this.reduce;
  }
}
