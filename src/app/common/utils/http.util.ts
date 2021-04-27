export let urlsafe = (url: string, ...params: any[]): string => {
  return url.concat(params.join("/"), "/");
};
