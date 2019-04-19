import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 // selector: '[app-servers]',
 // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServerStatus = false;
  serverCreationStatus = 'Server was not created';
  serverName = 'James Bond';
  serverCreated = false;
  servers = ['TestServer 1','TestServer 2'];
  hello =[]
  constructor() {
    setTimeout(() => {
      return this.allowServerStatus = true;
    },2000)
   }

  ngOnInit() {
  }

  onServerCreate(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    console.log(this.servers);
    this.serverCreationStatus = 'Server Created Successfully! Name is - '+this.serverName;
  }
  onCreateServer(event:any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
