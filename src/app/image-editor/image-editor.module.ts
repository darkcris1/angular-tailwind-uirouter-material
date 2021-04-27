import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { ImageEditorComponent } from './image-editor.component';

@NgModule({
  declarations: [ImageEditorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ColorPickerModule,
    FormsModule,
  ],
})
export class ImageEditorModule {
  static rootComponent = ImageEditorComponent;
}
