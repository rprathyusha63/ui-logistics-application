import { Injectable } from '@angular/core';
import { Warehouse } from './warehouse-data.service';
import { HttpClient } from '@angular/common/http';

export class VendorListResponse{
  constructor(
    public headers:Object,
    public body:Vendor
  ){

  }
}
export class Vendor {
  constructor(
    public vendor_id?: number,
    public warehouse?:Warehouse,
    public businessName?: String,
    public firstName?: String,
    public lastName?: String,
    public type?: String,
    public email?: String,
    public phone?: String,
    public address?: String,
    public notes?: String
  ) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class VendorDataService {

  constructor(private http:HttpClient) { }

  getAllVendorsByWarehouse(id:string){
    return this.http.get<VendorListResponse[]>(`http://localhost:8093/vendors/findByWarehouseId/${id}`);
  }
}
