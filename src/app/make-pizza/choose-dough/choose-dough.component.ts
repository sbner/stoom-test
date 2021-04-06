import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'st-choose-dough',
  templateUrl: './choose-dough.component.html',
  styleUrls: ['./choose-dough.component.scss']
})
export class ChooseDoughComponent implements OnInit {

  faCheck = faCheck

  selectedDough: any = ''

  doughTypes: any[] = []

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getDoughTypes().subscribe((doughType:any[]) => this.doughTypes = doughType)
    if (this.mainService.getDoughSelection()){
      let selectedDough = this.mainService.getDoughSelection()
      this.selectedDough = selectedDough
    }
  }

  handleDoughSelection(data:string){
    this.mainService.updateDoughSelection(data)
    this.selectedDough = data
  }

}
