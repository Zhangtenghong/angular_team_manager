import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allPlayers:any;
  constructor(private _httpService : HttpService) { }

  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers(){
    const observable = this._httpService.getAllPlayersService();
    observable.subscribe( (data)=>{
      this.allPlayers = data;
    })
  }

  deletePlayer(id){
    if(confirm("Are you sure you want to delete this player?")){
      const observable = this._httpService.deletePlayerService(id)
      observable.subscribe( (data)=>{
        console.log(data);
        this.getAllPlayers();
      })
    }
  }

}
