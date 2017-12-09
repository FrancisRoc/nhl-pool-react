import { endpointCall, json, JSON_HEADER } from './customHttp';

const _emailPass = path => credentials =>
  endpointCall(path, {
    method: 'post',
    headers: JSON_HEADER,
    body: JSON.stringify(credentials),
  }).then(json);

export const login = _emailPass('/members/login');
