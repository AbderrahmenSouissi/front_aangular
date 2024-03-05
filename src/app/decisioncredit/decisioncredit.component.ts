import { Component, OnInit } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';



@Component({
  selector: 'app-decisioncredit',
  templateUrl: './decisioncredit.component.html',
  styleUrls: ['./decisioncredit.component.css'],


})
export class DecisioncreditComponent implements OnInit{
  
  clients: any[] = [];
  newClient: any = { name: '', email: '' };

  
  
  ngOnInit(): void {
    
  }
  
}
