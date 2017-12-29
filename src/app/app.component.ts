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
      this.cartitems=this.sorter(this.cartitems);
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
  sorter(arr:any[]):any[]{
    let op_arr=arr.sort((a,b)=>{
      if (a.title < b.title)
        return -1;
      if (a.title> b.title)
        return 1;
      return 0;
    });
    return op_arr;
  }
}
