import { SharedModule } from '$shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { UIRouterModule } from '@uirouter/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './_components/header/header.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { ColorGithubModule } from 'ngx-color/github';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    AboutComponent,
    HeaderComponent,
    FaqComponent,
    TermsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UIRouterModule,
    ReactiveFormsModule,
    ColorGithubModule,
    SharedModule,
    NgxTippyModule,
  ],
})
export class PublicModule {}
