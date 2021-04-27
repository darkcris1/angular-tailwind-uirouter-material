import { NEWSFEED_ROUTES } from './newsfeed.route';
import { UIRouterModule } from '@uirouter/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, UIRouterModule.forChild(NEWSFEED_ROUTES)],
})
export class NewsfeedModule {}
