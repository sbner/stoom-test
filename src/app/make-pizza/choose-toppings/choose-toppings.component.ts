import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { MainService } from 'src/app/services/main.service';
import { Topping } from './toppings.model';

@Component({
  selector: 'st-choose-toppings',
  templateUrl: './choose-toppings.component.html',
  styleUrls: ['./choose-toppings.component.scss']
})
export class ChooseToppingsComponent implements OnInit {

  inputDisabled = false

  faCheck = faCheck

  toppings: Topping[] = []
  selected: any = []
  stored: any = []

  constructor(private mainService : MainService) { }

  ngOnInit(): void {
    this.mainService.getToppings().subscribe((toppings:Topping[]) => this.toppings = toppings)
    this.stored = [...this.mainService.getToppingsSelection()]
    this.inputDisabled = this.mainService.checkChoosePizzaOfTheDay()
  }

  handleFormChange(data:any) {
    let dataArray = Object.entries(data)
    let selectedToppings:any = []

    if (this.stored){
      selectedToppings = [...this.stored]
      dataArray.forEach((element:any) => {
        if (element[1] === true){
          if (selectedToppings.includes(element[0])){
            let index = selectedToppings.indexOf(element[0])
            selectedToppings.splice(index,1)
            this.selected = selectedToppings
            this.stored = selectedToppings
          } else {
            selectedToppings = [...selectedToppings, element[0]]
          }
        }
      })
    } else {
      dataArray.forEach((element:any) => {
        if (element[1] === true){
          selectedToppings = [...selectedToppings, element[0]]
        }
      })
    }

    this.mainService.updateToppingSelection(selectedToppings.sort())
    this.selected = selectedToppings.sort()
    console.log('selected', selectedToppings.sort())
  }


}
