import { getRemoteCardBack, getRemoteHero, getRemoteCard } from '../services/CardDetail';

export default {

  namespace: 'CardBack',

  state: {
    backs: [],
    heros: [],
    cards: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/back') {
          console.log('CARD BACK');
          dispatch({
            type: 'getCardBack'
          });
        } else if ( location.pathname === '/hero') {
          dispatch({
            type: 'getHero'
          });
        } else if ( location.pathname === '/cards') {
          dispatch({
            type: 'getCard'
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
    },
    *getHero({ payload }, { call, put }) {
      const { data } = yield call(getRemoteHero);
      console.log( data );
      yield put( { type: 'setHero', payload: data } );
    },
    *getCard({ payload }, { call, put }) {
      const { data } = yield call(getRemoteCard, payload);
      console.log( data );
      yield put( { type: 'setCard', payload: data } );
    }
  },

  reducers: {
    setBack(state, action) {
      return { ...state, backs: action.payload };
    },
    setHero(state, action) {
      return { ...state, heros: action.payload };
    },
    setCard(state, action) {
      return { ...state, cards: action.payload };
    }
  }
}
