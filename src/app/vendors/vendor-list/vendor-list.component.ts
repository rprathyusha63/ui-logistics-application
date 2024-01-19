import { Component } from '@angular/core';
import { VendorDataService, VendorListResponse } from '../../service/vendor-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent {
  id='';
  vendorList: VendorListResponse[]=[];
constructor(private route: ActivatedRoute, private vendorService:VendorDataService){}
ngOnInit(): void {
  this.id =this.route.snapshot.params['id']
  console.log(this.id)
  this.getVendorsByWarehouse();
}
getVendorsByWarehouse(){
  this.vendorService.getAllVendorsByWarehouse(this.id).subscribe(success=>{
    this.vendorList=success;
  })
}
}
