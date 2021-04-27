import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PopperDirective } from './directives/popper.directive';

@NgModule({
  declarations: [HeaderComponent, PopperDirective],
  imports: [CommonModule, MaterialModule],
  exports: [PopperDirective],
})
export class SharedModule {}
