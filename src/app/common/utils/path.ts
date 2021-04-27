import { Ng2StateDeclaration } from '@uirouter/angular';
import { isObj, isFunction } from './is.util';

export interface RouteProps extends Ng2StateDeclaration {
  children?: RouteProps[];
}

export function path(
  url: string,
  comp?: any, // views or component or Function
  option: RouteProps = {}
): RouteProps {
  const { name, views: optionView, ...rest } = option;
  const isViews = isObj(comp);

  const obj: RouteProps = { ...rest, url, name: name || url };

  if (!comp) return obj;

  if (isFunction(comp)) {
    obj.loadChildren = comp;
  } else if (isViews) {
    obj.views = optionView || comp;
  } else {
    obj.component = comp;
  }
  return obj;
}

export function route(...states: RouteProps[]): RouteProps[] {
  const childrens: RouteProps[] = [];

  states.forEach((state) => {
    const { children, ...rest } = state;

    children?.forEach((child) => {
      child.parent = rest.name;

      child.children?.forEach((child$) => {
        child$.parent = child.parent + (child.name || '');
        child$.name = child$.parent + child$.name;
      });

      child.name = child.parent + (child.name || '');

      if (child.children) childrens.push(...route(...child.children)); // Recursively Add the grancChildrem

      delete child.children;
      childrens.push(child);
    });

    delete state.children;
  });

  return ([] as RouteProps[]).concat(states, childrens);
}

export function protectedRoute(
  onEnter: RouteProps['onEnter'],
  ...states: RouteProps[]
) {
  states.forEach((state) => {
    if (state.loadChildren) return;
    state.onEnter = onEnter;
  });
  return route(...states);
}
