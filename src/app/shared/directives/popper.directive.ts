import { style, transition } from '@angular/animations';
import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  createPopper,
  Instance,
  Modifier,
  OptionsGeneric,
  Placement,
} from '@popperjs/core';

type Option = Partial<OptionsGeneric<Partial<Modifier<any, any>>>>;

@Directive({
  selector: '[app-popper]',
})
export class PopperDirective implements OnInit, OnDestroy {
  @Input() parent!: HTMLElement;
  @Input() placement: Placement = 'top';
  @Input() appPopper?: HTMLElement;
  @Input() show?: boolean = false;

  private popper!: Instance;
  private element = this.el.nativeElement;
  constructor(private el: ElementRef) {}
  initElementStyle() {
    const modal = document.createElement('div');
    this.element.style.transition = 'all .3s ease';
    if (!this.show) {
      this.element.style.opacity = '0';
      this.element.style.visibility = 'hidden';
    }

    let flag = false;
    this.parent.addEventListener('click', () => {
      this.element.style.visibility = flag ? 'hidden' : 'visible';
      this.element.style.opacity = flag ? '0' : '1';
      flag = !flag;
    });
  }
  ngOnInit() {
    this.initElementStyle();
    const defaultConfig: Option = {
      placement: this.placement,
      strategy: 'fixed',
      modifiers: [
        {
          name: 'arrow',

          options: {
            element: this.el.nativeElement.querySelector('#arrow'),
            padding: ({ popper }: { popper: any }) => {
              return popper.width / 2;
            },
          },
        },
        {
          name: 'offset',
          options: { offset: [0, 8] },
        },
      ],
    };

    this.popper = createPopper(
      this.parent,
      this.el.nativeElement,
      defaultConfig
    );
  }

  ngOnDestroy() {
    if (!this.popper) return;

    this.popper.destroy();
  }
}
