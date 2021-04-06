import {  HttpResponse  } from '@angular/common/http'
import { throwError } from 'rxjs'

export class ErrorHandler {
    static handleError(error: HttpResponse<any> | any){
        let errorMessage: string 
        if (error instanceof Response){
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        } else {
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return throwError(errorMessage)
    }
}