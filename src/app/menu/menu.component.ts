import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { WarehouseDataService, WarehouseListResponse } from '../service/warehouse-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  warehouses: WarehouseListResponse[]=[];
  warehouseMenuItems:MenuItem[] =[];
  menuItem!: MenuItem;
constructor(private warehouseService: WarehouseDataService){}
  ngOnInit() {
    this.warehouseService.getAllWarehouses().subscribe(success => {
        this.warehouses=success;
        console.log(this.warehouses);
        this.items = [
            {label:'mLogistics',
            icon: 'pi pi-truck',
            style: {'text': 'auto'}},
    
              {
                  label: 'Vendor',
                  icon: 'pi pi-fw pi-user',
                  items: [
                      {
                          label: 'Vendor products',
                          icon: 'pi pi-search',
                      },
                      {
                          label: 'Add Vendor',
                          icon: 'pi pi-user-plus'
                      },
                      {
                        label: 'Delete Vendor',
                        icon: 'pi pi-user-minus'
                    },
                    {
                      label: 'Edit Vendor',
                      icon: 'pi pi-user-edit'
                  },  {
                    separator: true
                },
                  {
                    label: 'Add Product to Vendor Selling List',
                    icon: 'pi pi-plus',
                }
                  ]
              },
              {
                  label: 'Product',
                  icon: 'pi pi-pencil',
                  items: [
                    {
                      label: 'Products List',
                      icon: 'pi pi-fw pi-align-justify'
                  },
                      {
                          label: 'Add Product',
                          icon: 'pi pi-fw pi-plus'
                      },
                      {
                          label: 'Edit Product',
                          icon: 'pi pi-pencil'
                      },
                      {
                          label: 'Remove Product',
                          icon: 'pi pi-minus'
                      },
                      {
                        separator: true
                    },
                      {
                        label: 'Create New product Category',
                        icon: 'pi pi-plus'
                    },
                  ]
              },
              {
                  label: 'Services',
                  icon: 'pi pi-gift',
                  items: [
                    {
                      label: 'Services List',
                      icon: 'pi pi-fw pi-align-justify'
                  },
                      {
                          label: 'Add New Service',
                          icon: 'pi pi-plus'
                      },
                      {
                          label: 'Edit Service',
                          icon: 'pi pi-pencil'
                      },
                      {
                          label: 'Remove Service',
                          icon: 'pi pi-minus',
                          
                      }
                  ]
              },
              {
                label: 'Users',
                icon: 'pi pi-users',
                items: [
                  {
                    label: 'Users',
                    icon: 'pi pi-fw pi-align-justify'
                },
                    {
                        label: 'Add New User',
                        icon: 'pi pi-user-plus'
                    },
                    {
                        label: 'Edit User',
                        icon: 'pi pi-user-edit'
                    },
                    {
                        label: 'Remove User',
                        icon: 'pi pi-user-minus',
                        
                    }
                ]
            },
            {
              label: 'Roles',
              icon: 'pi pi-pencil',
              items: [
                {
                  label: 'Roles',
                  icon: 'pi pi-fw pi-align-justify'
              },
                  {
                      label: 'Add New Role',
                      icon: 'pi pi-plus'
                  },
                  {
                      label: 'Edit Role',
                      icon: 'pi pi-pencil'
                  },
                  {
                      label: 'Remove Role',
                      icon: 'pi pi-minus',
                      
                  }
              ]
          },
          {
            label: 'Orders',
            icon: 'pi pi-pencil',
            items: [
              {
                label: 'Orders',
                icon: 'pi pi-fw pi-align-justify'
            },
                {
                    label: 'Create New Order',
                    icon: 'pi pi-plus'
                },
                {
                    label: 'Edit Order',
                    icon: 'pi pi-pencil'
                }
            ]
        }]
        
        for(var warehouse of this.warehouses){
            var warehouseId= warehouse.body.warehouseId ===undefined ? '':warehouse.body.warehouseId.toString();
            var warehouseName = warehouse.body.warehouseName===undefined?'':warehouse.body.warehouseName.toString();
            const item: MenuItem = {
                label: warehouseId.concat(' | ').concat(warehouseName),
                icon:'pi pi-box',
                routerLink : ['/vendors',warehouseId]
               
              };
              this.warehouseMenuItems?.push(item);

        }
        console.log(this.warehouseMenuItems)
        const wMenuitem: MenuItem = {
            label: 'Warehouses',
            icon:'pi pi-building',
            items:this.warehouseMenuItems,
          };
          this.items.push(wMenuitem);

          const signout: MenuItem = {
            label: 'Sign out',
            icon:'pi pi-sign-out',
            style: {'margin-left': 'auto'}
          };
          this.items.push(signout);
    })
      
  }
}
