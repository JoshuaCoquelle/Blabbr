<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import ChatService from '@/api/services/ChatService'
import MessageService from '@/api/services/MessageService'

export default {
  name: 'App',

  methods: {
    openSockets () {
      ChatService.openChannelSocket()
      MessageService.openMessageSocket()
    }
  },

  mounted () {
    this.openSockets()
  }
}
</script>
