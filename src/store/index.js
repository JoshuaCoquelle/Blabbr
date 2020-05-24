import Vue from 'vue'
import Vuex from 'vuex'
import UserService from '@/api/services/UserService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    channels: [],
    activeChannel: null,
    user: null
  },

  getters: {
    /**
     * Reduced Firebase user object.
     *
     * @param {object} { user }
     * @returns {object}
     */
    userData ({ user }) {
      return {
        email: user?.email,
        displayName: user?.displayName,
        uid: user?.uid
      }
    },

    /**
     * Build active channel object.
     *
     * @param {object} { messages, activeChannel }
     * @returns {object}
     */
    activeChannel ({ messages, activeChannel }) {
      return {
        name: activeChannel?.name,
        messages: messages.filter(message => message.channel === activeChannel?.name),
        hasMessages: !!messages.length
      }
    }
  },

  mutations: {
    setUser (state, user) {
      state.user = user
    },

    setChannels (state, channels) {
      state.channels = channels
    },

    setMessages (state, messages) {
      state.messages = messages
    },

    setActiveChannel (state, channel) {
      state.activeChannel = channel
    }
  },

  actions: {
    /**
     * Logs the user into KnakYak.
     *
     * @param {function} { commit }
     * @param {string, string} { email, password }
     * @returns void
     */
    async loginUser ({ commit }, { email, password }) {
      const { user } = await UserService.login(email, password)
      commit('setUser', user)
    },

    /**
     * Logs out the current user from KnakYak.
     *
     * @param {function} { commit }
     * @returns void
     */
    async logoutUser ({ commit }) {
      UserService.logout()
      commit('setUser', null)
    },

    /**
     * Registers the user to KnakYak.
     *
     * @param {function} { commit }
     * @param {string, string} { email, password }
     * @returns void
     */
    async registerUser ({ commit }, { username, email, password }) {
      const { user } = await UserService.register(email, password)
      await user.updateProfile({ displayName: username })
      commit('setUser', user)
    }
  }
})
