<template>
  <!-- chat content -->
  <v-content>
    <v-container class="half-width">
      <v-row>
        <v-col>
          <h3>
            <v-icon small color="blue" class="pr-3 pb-1">
              mdi-pound
            </v-icon>
            {{ activeChannel.name }}
          </h3>

          <div v-if="activeChannel">
            <ChatMessage
              v-for="(data, index) in activeChannel.messages" :key="index"
              :message="data.message"
              :author="data.author"
              :timestamp="data.timestamp"
              class="mt-4"
            />
          </div>

          <v-textarea
            v-model="message"
            row-height="2"
            rows="1"
            auto-grow
            label="What's up?"
            class="mt-8"
          ></v-textarea>

          <v-btn
            large
            depressed
            :block="isMobile"
            color="primary"
            class="font-weight-bold"
            @click="newMessageHandler"
          >
            Yak Away <v-icon class="pl-3">mdi-send</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageService from '@/api/services/MessageService'
import ChatMessage from '@/components/chat/ChatMessage'

export default {
  name: 'Window',

  data () {
    return {
      message: ''
    }
  },

  components: {
    ChatMessage
  },

  methods: {
  /**
   * Push a new message to the Firestore DB.
   *
   * @returns {void}
   */
    newMessageHandler () {
      MessageService.newMessage(this.message)
    }
  },

  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    ...mapGetters(['activeChannel'])
  }
}
</script>
