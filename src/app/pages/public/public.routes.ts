import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { WithHeader } from 'src/app/common/utils/layout.util';
import { path, route } from 'src/app/common/utils/path';
import { HeaderComponent } from './_components/header/header.component';

function withHeader(component: any) {
  return WithHeader(component, HeaderComponent); // Custom header Component
}

export const PUBLIC_ROUTES: Ng2StateDeclaration[] = route(
  path('/', withHeader(IndexComponent)),
  path('/login', withHeader(LoginComponent)),
  path('/register', withHeader(RegisterComponent)),
  path('/about', withHeader(AboutComponent)),
  path('/terms', withHeader(TermsComponent)),
  path('/faq', withHeader(FaqComponent))
);
