import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { MainService } from 'src/app/services/main.service';
import { Extra } from './extras.model';

@Component({
  selector: 'st-choose-extras',
  templateUrl: './choose-extras.component.html',
  styleUrls: ['./choose-extras.component.scss']
})
export class ChooseExtrasComponent implements OnInit {

  faCheck = faCheck

  extras: Extra[] = []
  selected: any = []
  stored: any = []

  constructor(private mainService : MainService) { }

  ngOnInit(): void {
    this.mainService.getExtras().subscribe((extra: any[]) => this.extras = extra)
    this.stored = this.mainService.getExtrasSelection()
    console.log("selected:", this.selected)
  }

  handleFormChange(data:any) {
    let dataArray = Object.entries(data)

    let selectedExtras:any = []
    let selectedBorda:any = []
    let final: any = []

    if (this.stored){
      dataArray.forEach((element:any) => {
        if (element[0] === 'borda'){
          selectedBorda = [element[1]]
        }
        if (element[1] === true){
          selectedExtras = [...selectedExtras, element[0]]
        }
      })
  
      if (selectedBorda != ''){
        final = [...selectedBorda, ...selectedExtras.sort()]
      } else {
        final = [...selectedExtras.sort()]
      }    
  
      this.mainService.updateExtrasSelection(final)
      this.selected = [...final]
    } else {

    }

    }

}
