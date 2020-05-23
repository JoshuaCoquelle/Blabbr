<template>
  <!-- chat content -->
  <v-content>
    <v-container>
      <v-row>
        <v-col>
          <h3>
            <v-icon small color="blue" class="pr-3 pb-1">
              mdi-pound
            </v-icon>
            {{ activeChannel.name }}
          </h3>

          <!-- message list -->
          <div v-if="activeChannel.hasMessages">
            <ChatMessage
              v-for="(data, index) in activeChannel.messages" :key="index"
              :message="data.message"
              :author="data.author"
              :timestamp="data.timestamp"
              class="mt-4"
            />
          </div>

          <!-- empty state message -->
          <p class="grey--text text--darken-4 mt-8 text-center" v-else>
            It's quiet in here.. too quiet.
          </p>

          <!-- chat input -->
          <v-textarea
            v-model="message"
            row-height="2"
            rows="1"
            auto-grow
            label="What's up?"
            class="mt-8"
          ></v-textarea>

          <!-- new message button -->
          <Btn
            large
            color="primary"
            :block="$vuetify.breakpoint.xsOnly"
            @click="newMessageHandler"
          >
            Yak Away <v-icon class="pl-3">mdi-send</v-icon>
          </Btn>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageService from '@/api/services/MessageService'
import ChatMessage from '@/components/chat/ChatMessage'
import Btn from '@/components/elements/Btn'

export default {
  name: 'MainChatWindow',

  data () {
    return {
      message: ''
    }
  },

  components: {
    ChatMessage,
    Btn
  },

  methods: {
  /**
   * Push a new message to the Firestore DB and clears the field.
   *
   * @returns {void}
   */
    newMessageHandler () {
      MessageService.newMessage(this.message)
      this.message = ''
    }
  },

  computed: {
    ...mapGetters(['activeChannel'])
  }
}
</script>
