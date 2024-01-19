import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class WarehouseListResponse{
  constructor(
    public headers:Object,
    public body:Warehouse
  ){

  }
}
export class Warehouse{
  
  constructor(
    public warehouseId?:number,
    public warehouseName?: string,
    public address?: String, 
    public warehouseManager?: String,
    public warehouseContactNumber?: String,
    public warehouseEmail?: String,
    public warehouseCapacity?:number,
    public warehouseType?: String,
    public warehouseStatus?: String,
    public warehouseOperatingHours?: String,
    public createdOn?:Date,
    public createdBy?: String,
    public modifiedOn?:Date,
    public modifiedBy?: String,
    public  notes?: String
  ){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WarehouseDataService {

  constructor(private http:HttpClient) { }

  getAllWarehouses(){
    return this.http.get<WarehouseListResponse[]>('http://localhost:8092/warehouses');
  }

  /*getWarehouseById(id){
    return this.http.get<Warehouse>(`http://localhost:8092/warehouses/${id}`);
  }

  deleteWarehouse(id){
    console.log(id)
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.delete(`http://localhost:8092/warehouses/${id}`,{headers, responseType:'text'});
  }

  saveWarehouse(warehouse: Warehouse){
    return this.http.post<Warehouse>(`http://localhost:8092/warehouses`,warehouse);
  }*/
}
