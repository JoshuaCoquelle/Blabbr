<template>
  <v-form
    ref="authForm"
    v-model="valid"
    lazy-validation
  >
    <!-- username -->
    <v-text-field
      v-if="!isLogin"
      v-model="username"
      :rules="fieldRules"
      label="username"
      required
      outlined
      class="mb-3"
    ></v-text-field>

    <!-- email -->
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="email"
      required
      outlined
      class="mb-3"
    ></v-text-field>

    <!-- password -->
    <v-text-field
      v-model="password"
      :rules="fieldRules"
      label="password"
      type="password"
      required
      outlined
      class="mb-3"
    ></v-text-field>

    <v-btn
      block
      x-large
      depressed
      height="55"
      class="mr-4 font-weight-bold"
      color="primary"
      :disabled="!valid"
      @click="handleAuthSubmit"
      v-text="isLogin ? 'login' : 'register'"
    />
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      email: '',
      valid: true,
      fieldRules: [
        v => !!v || 'this field is required',
        v => (v && v.length >= 5) || 'minimum 5 characters required'
      ],
      emailRules: [
        v => !!v || 'email is required',
        v => /.+@.+\..+/.test(v) || 'email must be valid'
      ]
    }
  },

  props: {
    isLogin: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    ...mapActions([
      'loginUser',
      'registerUser'
    ]),

    /**
     * Authenticate the user and update the Vuex user state,
     * handles both login and registration.
     *
     * @returns {void}
     */
    async handleAuthSubmit () {
      if (this.invalidForm()) return
      const { username, email, password, loginUser, registerUser, isLogin } = this
      const authCall = isLogin ? loginUser : registerUser
      const authPayload = isLogin ? { email, password } : { username, email, password }

      try {
        await authCall(authPayload)
        this.$router.replace('/')
      } catch (error) {
        console.error(error)
      }
    },

    /**
     * Check if the auth form is invalid.
     *
     * @returns {boolean}
     */
    invalidForm () {
      return !this.$refs.authForm.validate()
    }
  }
}
</script>
