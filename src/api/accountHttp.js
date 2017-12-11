import { secureEndpointCall, json } from './customHttp';
import { get } from '../utils/storage';

export const fetchAccount = () =>
  secureEndpointCall(`/members/${get('id')}`).then(json);
