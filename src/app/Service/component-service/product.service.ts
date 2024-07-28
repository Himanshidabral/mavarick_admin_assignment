import { Injectable } from '@angular/core';
import { HttpsharedService } from '../httpshared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpService: HttpsharedService

  ) { 
    
  }

  getProduct(filterData: FilterData): Observable<any> {
    return this.httpService.getCall(`/product/list/?limit=${filterData.limit}&page=${filterData.page}&search=${filterData.search ? filterData.search : ''}`);
  };
  getCategory():Observable<any>{
    return this.httpService.getCall('/category/list');
  }

  getVendorsByCategory(categoryId: string):Observable<any>{
    return this.httpService.getCall(`/vendor/list?category=${categoryId}`);
  }

  addProduct(data:{name:string,price:number,discount:number,categoryId:string,venderId:string,size:string}):Observable<any>{
    return this.httpService.postCall('/product/add',data)
  }
  editProduct(productId:string,data:{name:string,price:number,discount:number,categoryId:string,venderId:string,size:string}):Observable<any>{
    return this.httpService.putCall(`/product/edit/${productId}`,data);
  }

  deleteProduct(productId:string):Observable<any>{
    return this.httpService.deleteCall(`/product/delete`,productId);
  }

  
  
}
interface FilterData {
  limit?: number;
  search?: string;
  page?: number;
  filterType?: string;
}

