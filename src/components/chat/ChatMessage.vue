<template>
  <v-card
    max-width="650"
    outlined
  >
    <v-card-text>
      <!-- user info -->
      <p class="primary--text font-weight-bold">
        <span>{{ author }}</span>

        <v-icon class="primary--text body-1">
          mdi-chevron-double-right
        </v-icon>
      </p>

      <!-- message content -->
      <p
        v-text="message"
        class="grey--text text--darken-4 mb-1"
      />

      <p
        v-text="timestamp"
        class="mb-0"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ChatMessage',

  props: {
    author: {
      type: String,
      required: true
    },

    message: {
      type: String,
      required: true
    },

    timestamp: {
      type: String,
      required: false
    }
  }
}
</script>
