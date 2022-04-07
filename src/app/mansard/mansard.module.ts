import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MansardPageRoutingModule } from './mansard-routing.module';

import { MansardPage } from './mansard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MansardPageRoutingModule
  ],
  declarations: [MansardPage]
})
export class MansardPageModule {}
