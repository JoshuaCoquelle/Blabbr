import database from '@/api/database'
import store from '@/store'

export default class ChatService {
  /**
   * Channels collection.
   *
   * @returns channels[]
   */
  static get channels () {
    return database.collection('channels')
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
    })
  }
}
