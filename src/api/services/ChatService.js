import database from '@/api/database'
import store from '@/store'

export default class ChatService {
  /**
   * Get channels collection from Firestore.
   *
   * @returns Firestore channels collection
   */
  static get channels () {
    return database.collection('channels')
  }

  /**
   * Push a new channel to the Firestore DB.
   *
   * @param {string} channelName
   * @returns {void}
   */
  static newChannel (channelName) {
    ChatService.channels.add({
      name: channelName,
      ms: Date.now()
    })
  }

  static setActiveChannel (activeChannel) {
    store.commit('setActiveChannel', activeChannel)
  }

  /**
   * Opens socket to listen for new channels from Firestore
   * then updates the stores `channels` state.
   */
  static openChannelSocket () {
    ChatService.channels.onSnapshot(querySnapshot => {
      const channels = []
      querySnapshot.forEach(doc => channels.push(doc.data()))
      store.commit('setChannels', channels)
      ChatService.setActiveChannel(store.state.channels[0])
    })
  }
}
