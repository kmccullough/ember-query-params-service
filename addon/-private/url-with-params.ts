import * as qs from 'qs';

export function urlWithParams(queryParams?: QueryParams) {
  const { href } = window.location;
  let [ path, search ] = href.split('?');
  const existing = qs.parse(search);
  const query = qs.stringify({ ...existing, ...queryParams });
  if (query) {
    path += '?' + query;
  }
  return path;
}
