import { get } from '../utils/storage';
import { apiUrl } from '../config/env';
const ENDPOINT_PREFIX = `${apiUrl}v1`;

const queryParams = params =>
  Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');

const extendUrl = (url, params) =>
  params ? `${url}?${queryParams(params)}` : url;

const extendHeader = (headers = {}) => {
  const extendedHeader = {
    ...headers,
    Authorization: `Bearer ${get('token')}`,
  };
  return extendedHeader;
};

const status = res => {
  if (res.status >= 200 && res.status < 300) {
    return Promise.resolve(res);
  } else {
    if (res.status === 401 || res.status === 403) {
      this.context.router.transitionTo('/login');
    }
    return res.json().then(res => Promise.reject(res));
  }
};

export function text(res) {
  return res.text();
}

export function json(res) {
  return res.json();
}

export const JSON_HEADER = { 'Content-type': 'application/json' };

export function endpointCall(url, options = {}) {
  console.log('REQUEST: ', ENDPOINT_PREFIX + url, options);
  return fetch(ENDPOINT_PREFIX + url, options).then(status);
}

export const secureEndpointCall = (url, options = {}) => {
  const extendedOptions = {
    ...options,
    headers: extendHeader(options.headers),
  };
  const extendedUrl = extendUrl(url, options.queryParams);
  return fetch(
    `${ENDPOINT_PREFIX}/api/${extendedUrl}`.replace(/\/\/+/g, '/'),
    extendedOptions
  ).then(status);
};
