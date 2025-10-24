
function parseStringWithParams(url: string, params?: Record<string, string>): string {
  if (!params) {
    return url;
  }

  const keys = Object.keys(params);
  let route = url;
  for (const key of keys) {
    route = route.replace(`{{${key}}}`, encodeURIComponent(String(params[key])));
  }

  return route;
}

export { parseStringWithParams };