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
      if(this.cartitems.length>0){
        for(let item of this.cartitems){
          if(item.title==$event){
            item.quantity += 1;
            catcher=1;
            break;
          }else{
            catcher=0;
          }
        }
      }
      if(catcher==0){
        this.cartitems.push({title:$event,quantity:1})
      }
    console.log(this.cartitems);
    console.log(this.cards);
  }
  cartremoval($event){
    for(let i in this.cartitems){
      console.log(i);
      if(this.cartitems[i].title==$event){
        if(this.cartitems[i].quantity>1){
            this.cartitems[i].quantity--;
        }else{
           this.cartitems.splice(+i,1);
        }
      }
    }
  }
}
