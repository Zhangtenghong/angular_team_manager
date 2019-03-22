import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  addPlayerService(player){
    return this._http.post('/api/players', player);
  }

  getAllPlayersService(){
    return this._http.get('/api/players');
  }

  changeStatusService(id, updateObject){
    return this._http.put('/api/players/' + id, updateObject);
  }

  deletePlayerService(id){
    return this._http.delete('/api/players/' + id);
  }
}
