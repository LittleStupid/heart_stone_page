import { getRemoteCardInfo } from '../services/CardDetail';

export default {

  namespace: 'CardDetail',

  state: {
    imgAddress: 'http://wow.zamimg.com/images/hearthstone/cards/enus/animated/EX1_116_premium.gif',
    information: 'art'
  },

  effects: {
    *getCardInfo({ payload }, { call, put }) {
      const { data } = yield call(getRemoteCardInfo);
      console.log( data );
      yield put( { type: 'setInfo', payload: data[0].name } );
    }
  },

  reducers: {
    setInfo(state, action) {
      console.log('SET INFO');
      console.log(state);
      console.log(action);
      console.log({ ...state, information: action.payload });
      return { ...state, information: action.payload };
    }
  }

};
