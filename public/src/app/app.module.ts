import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    StatusComponent,
    ListComponent,
    AddComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
