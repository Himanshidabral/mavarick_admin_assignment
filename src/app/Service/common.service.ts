
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ResponseCatList, ResponseCatAdd, Category } from '../interface/category.interface';
import { HttpsharedService } from './httpshared.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private httpService: HttpsharedService
  ) { }

  login(data:{email:string,password:string}):Observable<any>{
     return this.httpService.postCall('/auth/login',data);
  }

  


}
