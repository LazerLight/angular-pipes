import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CryptoTrackerComponent } from './crypto-tracker/crypto-tracker.component';
import { DateChangerComponent } from './date-changer/date-changer.component';
import { EmojifyPipe } from './pipes-folder/emojify.pipe';
import { BenicioComponent } from './benicio/benicio.component';
import { ActorFilterPipe } from './pipes-folder/actor-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CryptoTrackerComponent,
    DateChangerComponent,
    EmojifyPipe,
    BenicioComponent,
    ActorFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
