import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'st-make-pizza',
  templateUrl: './make-pizza.component.html',
  styleUrls: ['./make-pizza.component.scss']
})
export class MakePizzaComponent implements OnInit {

  show = false;

  Links: any[] = [
    {
      linkLabel: "1 - Escolha a massa",
      linkRoute: "massa"
    },
    {
      linkLabel: "2 - Escolha os ingredientes",
      linkRoute: "ingredientes"
    },
    {
      linkLabel: "3 - Escolha os extras",
      linkRoute: "extras"
    },
    {
      linkLabel: "4 - Revise a sua pizza",
      linkRoute: "revisao"
    },
  ]

  constructor(private mainService: MainService) { }

  ngOnInit(): void {  
    this.show = this.mainService.checkChoosePizzaOfTheDay()
  }

}
