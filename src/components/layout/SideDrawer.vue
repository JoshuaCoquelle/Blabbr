<template>

</template>

<script>
import { mapActions } from 'vuex'
import ChatService from '@/api/services/ChatService'
import Btn from '@/components/elements/Btn'

export default {
  name: 'SideDrawer',

  data () {
    return {
      drawer: null,
      newChannelName: ''
    }
  },

  components: {
    Btn
  },

  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    ...mapActions(['logoutUser']),

    /**
     * Push a new channel to the Firestore DB.
     *
     * @returns {void}
     */
    newChannelHandler () {
      ChatService.newChannel(this.newChannelName)
    },

    /**
     * Close nav drawer and sets the active channel by name.
     *
     * @returns {void}
     */
    activeChannelHandler (activeChannel) {
      this.drawer = !this.drawer
      ChatService.setActiveChannel(activeChannel)
    }
  }
}
</script>
