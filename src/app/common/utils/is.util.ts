export const isObj = (obj: any) => !!obj && obj.constructor === Object;

export const isPromise = (p: any) => Boolean(p && typeof p.then === 'function');

export const isFunction = (obj: any) =>
  !!obj && obj.constructor === Function && !/^class/.test(obj.toString());
