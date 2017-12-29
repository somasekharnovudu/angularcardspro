import { Component ,OnInit} from '@angular/core';
import {CardService} from './card/card.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  cards
  cartitems=[];
  constructor(private cardService:CardService){}
  ngOnInit(){
    this.cardService.getData()
    .subscribe(response=>{
      this.cards=response.json();
    })
  }
  cartTotal($event){
      let catcher=0;
    for(let item of this.cartitems){
      if(item.title==$event){
        item.quantity += 1;
        catcher=1;
      }
    }
    if(!catcher){
      this.cartitems.push({title:$event,quantity:1})
    }
    console.log(this.cartitems);
  }
}
