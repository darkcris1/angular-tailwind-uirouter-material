import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('imageEditor', { read: ViewContainerRef })
  imageEditor!: ViewContainerRef;
  selectedMenu!: HTMLElement;

  file!: File;
  constructor(private crf: ComponentFactoryResolver) {}

  ngAfterViewInit() {}
  async handleChange(e: any) {
    this.file = e.target.files[0];
    if (this.file) {
      const { ImageEditorModule } = await import(
        'src/app/image-editor/image-editor.module'
      );
      const instance = this.imageEditor.createComponent(
        this.crf.resolveComponentFactory(ImageEditorModule.rootComponent)
      ).instance;
      instance.imageFile = this.file;
      instance.onSave.subscribe((file) => console.log(file));
    }
  }
}
