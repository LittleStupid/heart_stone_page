import { getRemoteCardInfo } from '../services/CardService';

export default {

  namespace: 'CardDetail',

  state: {
    imgAddress: 'http://wow.zamimg.com/images/hearthstone/cards/enus/animated/EX1_116_premium.gif',
    information: 'art'
  },

  effects: {
    *getCardInfo({ payload }, { call, put }) {
      const { data } = yield call(getRemoteCardInfo);
      yield put( { type: 'setInfo', payload: data[0].name } );
    }
  },

  reducers: {
    setInfo(state, action) {
      return { ...state, information: action.payload };
    }
  }

};
