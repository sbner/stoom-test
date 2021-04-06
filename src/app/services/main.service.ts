import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ST_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';
import { map, catchError} from 'rxjs/operators'
import { Topping } from '../make-pizza/choose-toppings/toppings.model';
import { Pizza } from '../pizza.model';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  pizza: Pizza = {
    selectedDough: '',
    selectedToppings: [],
    selectedExtras: []
  }

  choosePizzaOfTheDay: boolean = false

  constructor(private http: HttpClient) { }

  checkChoosePizzaOfTheDay() {
    return this.choosePizzaOfTheDay
  }

  updateChoosePizzaOfTheDay(bool:boolean) {
    this.choosePizzaOfTheDay = bool
  }

  getPizzaOfTheDay(): Observable<Topping[]> {
    return this.http.get(`${ST_API}/pizzaOfTheDay`)
    .pipe(map((response:any) => response))
    .pipe(catchError(ErrorHandler.handleError))
  }

  getToppings(): Observable<Topping[]> {
    return this.http.get(`${ST_API}/toppings`)
    .pipe(map((response:any) => response))
    .pipe(catchError(ErrorHandler.handleError))
  }

  getDoughTypes(): Observable<any[]> {
    return this.http.get(`${ST_API}/doughTypes`)
    .pipe(map((response:any) => response))
    .pipe(catchError(ErrorHandler.handleError))
  }

  getExtras(): Observable<any[]> {
    return this.http.get(`${ST_API}/extras`)
    .pipe(map((response:any) => response))
    .pipe(catchError(ErrorHandler.handleError))
  }

  getPontos(): Observable<any[]> {
    return this.http.get(`${ST_API}/pontosBeneficio`)
    .pipe(map((response:any) => response))
    .pipe(catchError(ErrorHandler.handleError))
  }

  getDoughSelection(){
    if (this.pizza.selectedDough){
      return this.pizza.selectedDough
    } else {
      return undefined
    }
  }

  updateDoughSelection(data:string){
    this.pizza.selectedDough = data
  }

  getToppingsSelection(){
    return this.pizza.selectedToppings
  }

  updateToppingSelection(data:any){
    this.pizza.selectedToppings = [...data]
  }

  getExtrasSelection(){
    return this.pizza.selectedExtras
  }

  updateExtrasSelection(data:Array<any>){
    this.pizza.selectedExtras = [...data]
    console.log("from service:", this.pizza.selectedExtras)
  }
}
