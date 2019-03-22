import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameNumber:any;
  allPlayers: any;
  currentKey: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { 

    }

  ngOnInit() {
    this.getAllPlayers();
    this._route.params.subscribe((params: Params) => {
      this.gameNumber = params['number'];
      if(this.gameNumber == '1'){
        this.currentKey = 'game_one_status';
      }else if(this.gameNumber == '2'){
        this.currentKey = 'game_two_status';
      }else{
        this.currentKey = 'game_three_status';
      }
    });
  }

  getAllPlayers() {
    const observable = this._httpService.getAllPlayersService();
    observable.subscribe((data) => {
      this.allPlayers = data;
    })
  }

  changeStatus(id, status){
    console.log("Changing status")
    console.log(id, status);
    const observable = this._httpService.changeStatusService(id, {game: this.currentKey, status: status});
    observable.subscribe( (data)=>{
        this.getAllPlayers();
    })
  }

}
