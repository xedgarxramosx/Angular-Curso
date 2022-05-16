import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DBZModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DBZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
