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
    trigger('reduceState', [ //Quel est la variable qui va définir mon état
      state('true', style({ //Si ma variable est a true alors la largeur de mon élément est de 80px
        width:'80px',
        overflow: 'hidden'
      })),
      state('false',   style({ //Si elle est a false, alors elle est de 250px
        width:'250px'
      })),
      transition('true => false', animate('500ms ease-out')), //ease-out rapide au départ, puis lent a la fin
      transition('false => true', animate('500ms ease-in')) //ease-in lent au déput puis rapide a la fin
    ])
  ]
})
export class SideBarComponent implements OnInit {
  @Input()size:String
  @Input()class:String
  @Input()reduce = false;
  constructor( ) { }
  ngOnInit() {
  }
  clickReduce(){
    console.log(this.reduce);
    this.reduce=!this.reduce;
  }
}
