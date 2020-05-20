import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    channels: [],
    activeChannel: []
  },

  mutations: {
    setChannels (state, channels) {
      state.channels = channels
    },

    setMessages (state, messages) {
      state.messages = messages
    },

    setActiveChannel (state, channel) {
      state.activeChannel = channel
    }
  }
})
