
export default {
  namespace: "interfaceList",
  state:{
    interface: [],
    event: ''
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
      if (payload.payload.interfaceData) {
        let newdata = payload.payload.interfaceData
        let newinterface = state.interface
        newinterface = newdata
        return { ...state, interface: newinterface }
      } else {
        return null
      }

    },
    event(state, payload) {
      if (payload.payload.event) {
        return { ...state, event: payload.payload.event}
      } else {
        return null
      }
    }
  },
  subscriptions: {}
}
