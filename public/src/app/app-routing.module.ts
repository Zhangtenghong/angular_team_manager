import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { StatusComponent } from './status/status.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: 'players', component: PlayerComponent, children: [
    {path: 'list', component: ListComponent},
    {path: 'addplayer', component: AddComponent},
    {path: '', pathMatch: 'full', redirectTo: '/players/list'}
  ]},
  {path: 'status', component: StatusComponent, children: [
    {path: 'game/:number', component: GameComponent},
    {path: '', pathMatch: 'full', redirectTo: '/status/game/1'}
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/players' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
