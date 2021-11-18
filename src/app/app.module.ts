import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { MistakesComponent } from './mistakes/mistakes.component';
import { GameStatusComponent } from './game-status/game-status.component';
import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MistakesComponent,
    GameStatusComponent,
    ImagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
