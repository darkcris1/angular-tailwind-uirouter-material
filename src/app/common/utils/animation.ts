import { animate, style, transition, trigger } from '@angular/animations';

export const fly = trigger('fly', [
  transition(
    'void => *',
    [
      style({ opacity: 0, transform: 'translate({{x}}px, {{y}}px)' }),
      animate(300, style({ opacity: 1, transform: 'translate(0px,0px)' })),
    ],
    { params: { x: 100, y: 0 } }
  ),
  transition(
    '* => void',
    [
      style({ opacity: 1, transform: 'translate(0px,0px)' }),
      animate(
        300,
        style({ opacity: 0, transform: 'translate({{x}}px, {{y}}px)' })
      ),
    ],
    { params: { x: 100, y: 0 } }
  ),
]);

export const fade = trigger('fly', [
  transition('in', [
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 })),
  ]),
  transition('out', [
    style({ opacity: 1 }),
    animate(300, style({ opacity: 0 })),
  ]),
]);
