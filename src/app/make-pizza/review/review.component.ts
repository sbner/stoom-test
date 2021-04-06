import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'st-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  pizzaOfTheDay = false
  pontos: any = 0

  selectedDough: any = ''
  selectedToppings: any[] = []
  selectedExtras: any[] = []

  constructor(private mainsService: MainService) { }

  ngOnInit(): void {
    this.selectedDough = this.mainsService.getDoughSelection()
    this.selectedToppings = this.mainsService.getToppingsSelection()
    this.selectedExtras = this.mainsService.getExtrasSelection()
    this.pizzaOfTheDay = this.mainsService.checkChoosePizzaOfTheDay()
    this.pizzaOfTheDay = this.mainsService.checkChoosePizzaOfTheDay()
    this.mainsService.getPontos().subscribe((element:any) => this.pontos = element)
  }

}
