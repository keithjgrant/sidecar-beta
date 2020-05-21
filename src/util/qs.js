import qs from 'querystring';

export function getParams() {
  if (typeof window === 'undefined' || typeof window.location === 'undefined') {
    return {};
  }
  const search = window.location.search || '';
  return qs.parse(search.replace(/^\?/, ''));
}

export function setParam(key, value) {
  if (typeof window === 'undefined' || typeof window.location === 'undefined') {
    return;
  }

  const q = qs.stringify({
    ...getParams(),
    [key]: encodeURIComponent(value),
  });
  window.history.replaceState({}, null, `${window.location.pathname}?${q}`);
}
