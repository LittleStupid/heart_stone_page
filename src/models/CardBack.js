import { getRemoteCardBack, getRemoteHero, getRemoteCard } from '../services/CardDetail';

export default {

  namespace: 'CardBack',

  state: {
    backs: [],
    heros: [],
    cards: [],

    param: {},
    showModal: false
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
            type: 'getCard',
            payload: { page: 0 }
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
      if( !payload ) { console.log( payload ); return; }
      if( payload.page === undefined ) { console.log( payload.page ); return; }
      if( payload.page < 0 ) { console.log( payload.page ); return; }
      const { data } = yield call(getRemoteCard, payload);
      // if( data.length === 0 ) {
        // console.log( 'get nothing from server');
        // return ;
      // }

      yield put( { type: 'setCard', payload: data } );
      yield put( { type: 'setParam', payload: payload });
    },
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
    },
    setParam(state, action) {
      return { ...state, param: action.payload };
    },
    setModal(state, action) {
      console.log(action);
      return { ...state, showModal: action.payload };
    }
  }
}
