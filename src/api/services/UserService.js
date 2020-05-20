import auth from '@/api/auth'

export default class UserService {
  /**
   * Creates a new user account.
   *
   * @param {string} email
   * @param {string} password
   * @returns {promise}
   */
  static register (email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  /**
   * Logs the user in with their email & password.
   *
   * @param {string} email
   * @param {string} password
   * @returns {promise}
   */
  static login (email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  /**
   * Logs out the user from KnakYak.
   *
   * @returns {promise}
   */
  static logout () {
    auth.signOut()
  }
}
