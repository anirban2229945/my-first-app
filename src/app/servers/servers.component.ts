import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `
  //<app-server></app-server>
 // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
allowNewServer=false;
serverCreationStatus:string='No Server was created!';
serverName:string='MyTestServer';
userName:string='Anonymous User';
serverCreated:boolean=false;
servers=['TestServer1','TestServer2','TestServer3','TestServer4'];
constructor() {
  setTimeout(()=>{
    this.allowNewServer=true;
  },2000);
}

onCreateServer()
{
  this.serverCreated=true;
  this.serverCreationStatus='Server was Created Successfully!!'+this.serverName;
}
onUpdateServerName(event:Event)
{
this.serverName=(<HTMLInputElement>event.target).value;
}



}
