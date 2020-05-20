import database from '@/api/database'
import auth from '@/api/auth'
import store from '@/store'
import dayjs from 'dayjs'
const timestampBuilder = () => dayjs(new Date()).format('M/D/YYYY h:mma')

export default class MessageService {
  /**
   * Get messages collection from Firestore.
   *
   * @returns Firestone messages collection
   */
  static get messages () {
    return database.collection('messages')
  }

  /**
   * Push a new message to the Firestore DB.
   *
   * @param {string} message
   * @returns {void}
   */
  static newMessage (message) {
    MessageService.messages.add({
      channel: store.state.activeChannel.name,
      message,
      author: auth.currentUser.displayName,
      timestamp: timestampBuilder(),
      ms: Date.now()
    })
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
