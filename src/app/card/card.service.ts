import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class CardService{
  cards;
  private url="./assets/data/data.json";
  constructor(private http:Http){
  }
  getData(){
     return this.http.get(this.url)
  }
}