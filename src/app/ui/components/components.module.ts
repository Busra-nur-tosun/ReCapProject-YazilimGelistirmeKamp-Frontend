import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsModule } from './cars/cars.module';
import { HomeModule } from './home/home.module';
import { BasketsModule } from './baskets/baskets.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarsModule,
    HomeModule,
    BasketsModule
  ]
})
export class ComponentsModule { }
