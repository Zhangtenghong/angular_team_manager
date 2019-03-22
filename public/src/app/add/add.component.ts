import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newPlayer: any;
  errorMessages:any;
  constructor(private _httpService: HttpService, private _router: Router) { 
    this.newPlayer = {name: "", position: ''}
    this.errorMessages=[];
  }

  ngOnInit() {
  }

  addPlayer(){
    const observable = this._httpService.addPlayerService(this.newPlayer);
    observable.subscribe( (data)=>{
      console.log(data);
      this._router.navigate(['/players/list']);
    }, (err)=>{
      this.errorMessages = err.error;
    })
    // observable.subscribe(successCallback, errorCallback)
  }

}
