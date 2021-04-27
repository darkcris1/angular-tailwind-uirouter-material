import { HeaderComponent } from 'src/app/shared/components/header/header.component';
export function ContentOnly(content: any) {
  return { content };
}

export function WithHeader(content: any, header: any = HeaderComponent) {
  return {
    content,
    header: header || HeaderComponent,
  };
}
