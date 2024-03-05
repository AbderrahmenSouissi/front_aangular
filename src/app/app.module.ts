import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { DescriptionComponent } from './description/description.component';
import { DataoctroisComponent } from './dataoctrois/dataoctrois.component';
import { ExplorationComponent } from './exploration/exploration.component';
import { AnnulationComponent } from './annulation/annulation.component';
import { FormComponent } from './form/form.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DecisioncreditComponent } from './decisioncredit/decisioncredit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DescriptionComponent,
    DataoctroisComponent,
    ExplorationComponent,
    AnnulationComponent,
    FormComponent,
    DecisioncreditComponent,
    
    
    

    
    
    

    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
