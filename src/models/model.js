
export default {
  namespace: "interfaceList",
  state:{
    interface: []
  },

  effects:{
    // *getInterfaceData (payload, { put, select }) {
    //   let list = payload.payload.interfaceData
    //   console.log(list)
    //   const interfaceValue = yield select(state => state.interfaceList.interface)
    //   console.log(interfaceValue)
    // }
  },
  reducers:{
    // datalist(state, {payload}) {
    //   return {...state, ...payload}
    // }
    datalist(state, payload) {
      let newdata = payload.payload.interfaceData
      let newinterface = state.interface
      newinterface = newdata
      return { ...state, interface: newinterface }
    }
  },
  subscriptions: {}
}
