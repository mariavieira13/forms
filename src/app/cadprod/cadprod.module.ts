import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadprodPageRoutingModule } from './cadprod-routing.module';

import { CadprodPage } from './cadprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadprodPageRoutingModule
  ],
  declarations: [CadprodPage]
})
export class CadprodPageModule {}
