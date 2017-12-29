import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import {CardService} from './card.service';

@Component({
  selector:"cardComp",
  templateUrl:"./card.component.html",
  styleUrls:['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input('card') card;
  @Input('cart') cart;
  @Input ("desclimit") desclimit:string; 
  @Output('addCart') addCart=new EventEmitter();
  @Output('removeCart') removeCart=new EventEmitter();
  constructor(){}
  ngOnInit(){}
  cartadding(value){
    this.addCart.emit(value);
    this.detectChange()
  }
  cartremoving(value){
    this.removeCart.emit(value);
    this.detectChange();
  }
  detectChange(){
    let catcher=0;
    if(this.cart.length){
      for(var i in this.cart){
        if(this.cart[i].title==this.card.title){
          this.card["quantity"]=this.cart[i].quantity;
          catcher=1;
          break;
        }else{
          catcher=0;
        }
      }
    }
    if(catcher==0){
      this.card.quantity=0;
    }
  }
}