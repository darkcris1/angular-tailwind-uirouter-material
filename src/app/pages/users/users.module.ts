import { UIRouterModule } from '@uirouter/angular';
import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { FavoriteComponent } from './newsfeed/favorite/favorite.component';
import { FavoriteIdComponent } from './newsfeed/favorite-id/favorite-id.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [NewsfeedComponent, FavoriteComponent, FavoriteIdComponent, ProfileComponent],
  imports: [CommonModule, MaterialModule, UIRouterModule],
})
export class UsersModule {}
