import { getRemoteCardBack } from '../services/CardDetail';

export default {

  namespace: 'CardBack',

  state: {
    backs: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/back') {
          console.log('CARD BACK');
          dispatch({
            type: 'getCardBack'
          });
        }
      });
    },
  },

  effects: {
    *getCardBack({ payload }, { call, put }) {
      const { data } = yield call(getRemoteCardBack);
      console.log( data );
      yield put( { type: 'setBack', payload: data } );
    }
  },

  reducers: {
    setBack(state, action) {
      // console.log('SET INFO');
      console.log(state);
      console.log(action);
      console.log({ ...state, backs: action.payload });
      return { ...state, backs: action.payload };
    }
  }
}
