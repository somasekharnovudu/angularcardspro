import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import {CardService} from './card.service';

@Component({
  selector:"cardComp",
  templateUrl:"./card.component.html",
  styleUrls:['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input('card') card;
  @Input ("desclimit") desclimit:string; 
  @Output('addCart') addCart=new EventEmitter();
  constructor(){}
  ngOnInit(){}
  cartadding(value){
    this.addCart.emit(value);
  }
}