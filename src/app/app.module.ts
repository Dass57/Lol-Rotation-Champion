import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ApiRiotService } from './Services/api-riot.service';
import { ChampionsService } from './Services/champions.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from './Components/card/card.component';
import { DetailComponent } from './Components/detail/detail.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CardSpellComponent } from './Components/card-spell/card-spell.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    DetailComponent,
    CardSpellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [
    ApiRiotService,
    ChampionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
