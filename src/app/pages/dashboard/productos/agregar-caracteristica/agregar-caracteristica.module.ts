import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarCaracteristicaPageRoutingModule } from './agregar-caracteristica-routing.module';

import { AgregarCaracteristicaPage } from './agregar-caracteristica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AgregarCaracteristicaPageRoutingModule
  ],
  declarations: [AgregarCaracteristicaPage]
})
export class AgregarCaracteristicaPageModule {}
