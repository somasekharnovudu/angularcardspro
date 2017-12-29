import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {CardService} from './card/card.service';
import {CardComponent} from './card/card.component';
import { SummaryPipe } from './pipes/summary.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule ],
  declarations: [ AppComponent,CardComponent, SummaryPipe],
  providers:[CardService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
