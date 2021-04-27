import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import ImageEditor from 'tui-image-editor';
import { isMobile } from '$common/constants/mobile.constant';
import { dataURLtoFile } from '$common/utils/dataURLtoFile';
interface DispatcherOption {
  filterName?: string;
  mode?: string;
  shape?: string;
  imageFile?: File;
  icon?: string;
  imageUrl?: string;
}
const defaultOption: DispatcherOption = {
  filterName: 'Grayscale',
  shape: 'circle',
};

@Component({
  selector: 'ImageEditor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss'],
})
export class ImageEditorComponent implements AfterViewInit, OnDestroy {
  @Input('imageFile') imageFile: File = {} as File;
  @Input('isLoading') isLoading: boolean = false;
  @Output('onSave') onSave = new EventEmitter();
  @ViewChild('editorContainer') editorContainer: any;

  editor: ImageEditor = {} as ImageEditor;
  filterNameList = ['Grayscale', 'Sepia', 'Emboss', 'Sharpen', 'Invert'];
  shapeList = ['circle', 'triangle', 'rect'];
  iconsList = ['arrow', 'cancel'];
  textColor = '#ffffff';
  iconColor = '#000';
  brushColor = '#ffffff';
  textValue = '';
  brushWidth = 10;
  shape = 'circle';

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    const { clientHeight, clientWidth } = this.document.documentElement;

    this.editor = new ImageEditor(this.editorContainer.nativeElement, {
      cssMaxWidth: isMobile ? clientWidth : 800,
      cssMaxHeight: isMobile ? clientHeight : 800,
      usageStatistics: false,
      selectionStyle: {
        cornerColor: 'white',
        cornerStrokeColor: 'red',
        borderColor: 'white',
        cornerSize: isMobile ? 50 : 20,
        rotatingPointOffset: isMobile ? 100 : 50,
        cornerStyle: 'circle',
      },
    });
    this.editor.loadImageFromFile(this.imageFile).then(() => {
      this.editor.clearUndoStack();
    });
    this.editor.on('objectActivated', (props) => {
      if (props?.type === 'activeSelection') {
        this.editor.discardSelection();
      }
    });
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  dispatcher(action: string, option: DispatcherOption = defaultOption) {
    const { filterName, icon, imageUrl, mode } = option;

    this.editor.stopDrawingMode();
    switch (action) {
      case 'redo':
        if (this.editor.isEmptyRedoStack()) break;
        this.editor.redo();
        break;
      case 'undo':
        if (this.editor.isEmptyUndoStack()) break;

        this.editor.undo();
        break;
      case 'drawing-mode':
        if (!mode) break;
        this.editor.startDrawingMode(mode);
        this.handleBrush();
        this.handleShape();

        break;
      case 'filter':
        if (this.editor.hasFilter(filterName as string)) {
          this.editor.removeFilter(filterName);
          break;
        }
        this.editor
          .applyFilter(filterName || '')
          .catch((err) => console.log('Error on filtering'));
        break;
      case 'add-text':
        this.editor
          .addText(this.textValue || 'Text ...', {
            styles: {
              fill: this.textColor,
              fontSize: 75,
              fontFamily: 'Arial',
            },
          })
          .then(() => {
            this.textValue = '';
            this.dispatcher('select-mode');
          })
          .catch((err) => err);
        break;
      case 'add-icon':
        this.editor
          .addIcon(icon || '', { fill: this.iconColor })
          .catch((err) => err);
        break;
      case 'select-mode':
        this.editor.deactivateAll();
        break;
      case 'insert-image':
        this.editor.addImageObject(imageUrl || '').then((props: any) => {
          this.editor.setObjectPosition(props.id, {
            x: 250,
            y: 0,
            originX: 'left',
            originY: 'top',
          });
        });
        break;
      case 'save-image':
        const editedFile = dataURLtoFile(
          this.editor.toDataURL({ format: 'jpeg', quality: 0.75 }),
          this.imageFile.name
        );

        this.onSave.emit(editedFile);
        break;
    }
  }
  handleBrush() {
    this.editor.setBrush({ color: this.brushColor, width: this.brushWidth });
  }
  handleShape() {
    const isCircle = this.shape === 'circle';
    this.editor.setDrawingShape(this.shape, {
      fill: this.iconColor,
      ...(isCircle && { rx: 20, ry: 20 }),
    });
  }

  deleteActiveObject() {
    try {
      this.editor.removeActiveObject();
    } catch (_) {}
  }
  handleChange(e: any) {
    const files = e.target.files;
    if (files.length <= 0) return;

    this.dispatcher('load-image', { imageFile: files[0] });
  }
  handleInsertImage(e: any) {
    const files = e.target.files;
    if (files.length <= 0) return;
    const imageUrl = URL.createObjectURL(files[0]);
    this.dispatcher('insert-image', { imageUrl });
    e.target.value = '';
  }
}
