<template>
  <v-container>
    <v-row class="auth-screen mx-auto pt-12">
      <v-col>
        <!-- auth screen title -->
        <h3 class="primary--text text-center mb-10 font-weight-bold display-1">
          KnakYak <v-icon class="primary--text pl-1 display-1"> mdi-chat-outline </v-icon>
        </h3>

        <!-- dynamic login/registration form -->
        <AuthForm
          ref="authForm"
          @authError="authSnackbarVisible = true"
          :is-login="authFormMeta.isLogin"
        />

        <!-- auth messaging/route link -->
        <div class="text-center py-6">
          <span v-text="authFormMeta.authMessage" /> &nbsp;
          <router-link
            :to="authFormMeta.nextPath"
            v-text="authFormMeta.ctaText"
          />
        </div>
      </v-col>
    </v-row>

    <!-- auth error message snackbar -->
    <v-snackbar
      v-model="authSnackbarVisible"
      :timeout="4500"
      color="error"
      multi-line
    >
      <strong>Sorry, your credentials are invalid.</strong>
    </v-snackbar>
  </v-container>
</template>

<script>
import AuthForm from '@/components/forms/AuthForm'

export default {
  name: 'AuthScreen',

  data () {
    return {
      loginMessage: 'Don\'t have an account?',
      registerMessage: 'Have an account already?',
      authSnackbarVisible: false
    }
  },

  computed: {
    /**
     * Used to toggle between auth modes dynsamically.
     * @returns {object}
    */
    authFormMeta () {
      const { $route, loginMessage, registerMessage } = this
      const isLogin = $route.name === 'AuthLoginScreen'

      return {
        isLogin,
        nextPath: isLogin ? '/register' : '/login',
        ctaText: isLogin ? 'Register' : 'Login',
        authMessage: isLogin ? loginMessage : registerMessage
      }
    }
  },

  components: {
    AuthForm
  }
}
</script>

<style lang="scss" scoped>
.auth-screen {
  max-width: 300px;

  @media screen and (min-width: 600px) {
    max-width: 500px;
  }
}
</style>
