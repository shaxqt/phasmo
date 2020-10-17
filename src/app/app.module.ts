import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EvidenceSelectorModule } from './evidence-selector/evidence-selector.module';
import { GameSuggestionsModule } from './game-suggestions/game-suggestions.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EvidenceSelectorModule,
    GameSuggestionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
