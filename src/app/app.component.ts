import { fly } from './common/utils/animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fly],
})
export class AppComponent {
  title = 'angular-with-tailwind';
}
