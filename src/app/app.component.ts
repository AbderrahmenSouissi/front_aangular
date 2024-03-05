import { Component, OnInit } from '@angular/core';
import {GetClientService} from './services/get-client.service'





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'front';
  

   //conditional rendering
   template = true
   template0 = true
  //template validation
   validate_temp() {
    this.template = false
    this.template0 = true
    
    
   }

   validate_temp2() {
    this.template = true
    this.template0 =true
   }

   clients: any ;
   constructor(private getclient: GetClientService){}

   ngOnInit():void{

    this.getAllUsers();
    
   }
   
   getAllUsers(){
    this.getclient.getAllData().subscribe((res)=>{
      this.clients = res;

    });
   }


   
}
