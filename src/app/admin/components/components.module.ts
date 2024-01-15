import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsModule } from './brands/brands.module';
import { CarImagesModule } from './car-images/car-images.module';
import { CarsModule } from './cars/cars.module';
import { ColorsModule } from './colors/colors.module';
import { CustomersModule } from './customers/customers.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { RentalsModule } from './rentals/rentals.module';
import { UsersModule } from './users/users.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrandsModule,
    CarImagesModule,
    CarsModule,
    ColorsModule,
    CustomersModule,
    DashboardsModule,
    RentalsModule,
    UsersModule

  ]
})
export class ComponentsModule { }
