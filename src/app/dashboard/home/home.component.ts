import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _user: UserServices) { }
  user = [];

  ngOnInit() {
    this._user.getUsers().subscribe(res => {
      console.log(res);
    });
  }

}
