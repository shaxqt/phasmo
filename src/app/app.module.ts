import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EvidenceSelectorModule } from './evidence-selector/evidence-selector.module';
import { MatCardModule } from '@angular/material';
import { GhostSuggestionsModule } from './game-suggestions/ghost-suggestions/ghost-suggestions.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EvidenceSelectorModule,
    GhostSuggestionsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
