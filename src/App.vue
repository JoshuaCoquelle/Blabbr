<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import ChatService from '@/api/services/chat'
import MessageService from '@/api/services/message'

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
