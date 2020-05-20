import database from '@/api/database'
import store from '@/store'

export default class MessageService {
  static get messages () {
    return database.collection('messages')
  }

  /**
   * Opens socket to listen for new messages from Firestore
   * then updates the stores `messages` state.
   */
  static openMessageSocket () {
    MessageService.messages.onSnapshot(querySnapshot => {
      const messages = []
      querySnapshot.forEach(doc => messages.push(doc.data()))
      store.commit('setMessages', messages)
    })
  }
}
