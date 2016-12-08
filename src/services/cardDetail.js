import request from '../utils/request';
import qs from 'qs';

export async function getRemoteCardInfo() {
  return request('https://omgvamp-hearthstone-v1.p.mashape.com/cards/EX1_116', {
    method: 'get',
    headers: {"X-Mashape-Key": "97GnbLpzEemsh6rU25FWlsL2YAvkp1V1IczjsnQO80HhkRdfEf",
             "Accept": "application/json"}
    });
}

export async function getRemoteCardBack() {
  return request('https://omgvamp-hearthstone-v1.p.mashape.com/cardbacks', {
    method: 'get',
    headers: {"X-Mashape-Key": "97GnbLpzEemsh6rU25FWlsL2YAvkp1V1IczjsnQO80HhkRdfEf",
             "Accept": "application/json"}
    });
}
