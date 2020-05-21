<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import ChannelService from '@/api/services/ChannelService'
import MessageService from '@/api/services/MessageService'

export default {
  name: 'App',

  methods: {
    bindStreamListeners () {
      ChannelService.channelStreamHandler()
      MessageService.messageStreamHandler()
    }
  },

  mounted () {
    this.bindStreamListeners()
  }
}
</script>
