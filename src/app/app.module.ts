import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule,
  MatButtonModule,
  MatExpansionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputFormComponent } from './input-form/input-form.component';



@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule, 
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    
  }
}
