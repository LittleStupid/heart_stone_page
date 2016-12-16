import request from '../utils/request';
import qs from 'qs';

const LOCAL_URL = 'http://localhost:3000/api/';
const HEROKU_URL = 'https://afternoon-ridge-22195.herokuapp.com/api/';
// const URL = LOCAL_URL;
const URL = HEROKU_URL;

function genQueryParam( obj ) {
  let strParam = '';

  for (let key of Object.keys(obj)) {
    if( obj[key] === undefined ) continue;
    if( obj[key] === '' ) continue;
    strParam += ( key + '=' + obj[key] + '&' );
  }

  return strParam;
}

export async function getRemoteCardInfo() {
  return request('https://omgvamp-hearthstone-v1.p.mashape.com/cards/EX1_116', {
    method: 'get',
    headers: {"X-Mashape-Key": "97GnbLpzEemsh6rU25FWlsL2YAvkp1V1IczjsnQO80HhkRdfEf",
             "Accept": "application/json"}
    });
}

export async function getRemoteCommonCard() {
   return request(URL + 'cardbacks', { method: 'get' });
}

export async function getRemoteHero() {
  return request(URL + 'hero', { method: 'get' });
}

export async function getRemoteCard(params) {
  let request_url = URL + 'all' + '?';
  if( params ) {
    request_url += genQueryParam( params );
  }
  // console.log(request_url);
  return request(request_url, {
                  method: 'get'
                });
              }
