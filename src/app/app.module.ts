import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MakePizzaComponent } from './make-pizza/make-pizza.component';
import { FormsModule } from '@angular/forms';
import { ChooseToppingsComponent } from './make-pizza/choose-toppings/choose-toppings.component';
import { MainService } from './services/main.service';
import { ChooseDoughComponent } from './make-pizza/choose-dough/choose-dough.component';
import { ChooseExtrasComponent } from './make-pizza/choose-extras/choose-extras.component';
import { ReviewComponent } from './make-pizza/review/review.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MakePizzaComponent,
    ChooseToppingsComponent,
    ChooseDoughComponent,
    ChooseExtrasComponent,
    ReviewComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
