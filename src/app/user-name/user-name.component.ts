import { Component } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {
  userName:string='';


  constructor() {
  }

  onUserName()
  {
    this.userName='Hi Your User Name is '+this.userName;
  }
}
