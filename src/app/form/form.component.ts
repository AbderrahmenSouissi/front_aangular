import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  
  nom: string= '';
  prenom: string= '';
  mail: string='';
  tel: string='';
  numper: string='';
  cin: string='';

  ngOnInit(): void {
    
      
  }
}
