import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonarribaComponent } from './buttonarriba/buttonarriba.component';
import { ButtonabajoComponent } from './buttonabajo/buttonabajo.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonarribaComponent,
    ButtonabajoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
