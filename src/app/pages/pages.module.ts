import { PublicModule } from './public/public.module';
import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, UsersModule, PublicModule],
})
export class PagesModule {}
