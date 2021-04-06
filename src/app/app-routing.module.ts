import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ChooseDoughComponent } from './make-pizza/choose-dough/choose-dough.component';
import { ChooseExtrasComponent } from './make-pizza/choose-extras/choose-extras.component';
import { ChooseToppingsComponent } from './make-pizza/choose-toppings/choose-toppings.component';
import { MakePizzaComponent } from './make-pizza/make-pizza.component';
import { ReviewComponent } from './make-pizza/review/review.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'montar-pizza', component: MakePizzaComponent, 
      children: [
        {path: '', redirectTo: 'massa', pathMatch: 'full'},
        {path: 'massa', component: ChooseDoughComponent},
        {path: 'ingredientes', component: ChooseToppingsComponent},
        {path: 'extras', component: ChooseExtrasComponent},
        {path: 'revisao', component: ReviewComponent},
      ]},
  { path: 'sobre', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
