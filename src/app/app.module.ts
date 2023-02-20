import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // importer FormsModule

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent // ajouter le composant SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // ajouter FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
