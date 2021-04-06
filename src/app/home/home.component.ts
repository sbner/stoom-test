import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'st-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Descobre o dia de hoje
  n = new Date()
  currentDay = this.n.getDay()
  hoje = ""
  
  show = false;

  dailyPizzas: any = []

  constructor(
    private mainService: MainService,
    private router: Router
    ) { 
    switch (this.currentDay) {
      case 0:
        this.hoje = 'domingo'
      break
      case 1:
        this.hoje = 'segunda'
      break
      case 2:
        this.hoje = 'terça'
      break
      case 3:
        this.hoje = 'quarta'
      break
      case 4:
        this.hoje = 'quinta'
      break
      case 5:
        this.hoje = 'sexta'
      break
      case 6:
        this.hoje = 'sábado'
      break
    }
  }   

  ngOnInit(): void {
    this.mainService.getPizzaOfTheDay().subscribe((element:any) => this.dailyPizzas = [...element])
  }

  handleClick(data:any){
    this.mainService.updateToppingSelection(data.toppings.sort())
    
    if (this.currentDay === data.day){
      this.mainService.updateChoosePizzaOfTheDay(true)
    }
    
    this.router.navigateByUrl('/montar-pizza')
  }
}
