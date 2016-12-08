export default {

  namespace: 'CardDetail',

  state: {
    imgAddress: 'http://wow.zamimg.com/images/hearthstone/cards/enus/animated/EX1_116_premium.gif'
  },

  effects: {
  },

  reducers: {
    doChange(state, { payload }) {
      // console.log('CHANGE CHANGE')
      return { ...state, imgAddress: payload };
    }
  }

};
