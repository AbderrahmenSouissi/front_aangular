import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './search/search.component';
import { AnnulationComponent } from './annulation/annulation.component';
import { DescriptionComponent } from './description/description.component';
import { DataoctroisComponent } from './dataoctrois/dataoctrois.component';
import { ExplorationComponent } from './exploration/exploration.component';
import { DecisioncreditComponent } from './decisioncredit/decisioncredit.component';

const routes: Routes = [
  {path : "form" , component :FormComponent},
  {path : "search" , component :SearchComponent},
  {path : "annulation" , component :AnnulationComponent},
  {path : "description" , component :DescriptionComponent},
  {path : "dataoctrois" , component :DataoctroisComponent},
  {path : "exploration" , component :ExplorationComponent},
  {path : "decisioncredit" , component :DecisioncreditComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
