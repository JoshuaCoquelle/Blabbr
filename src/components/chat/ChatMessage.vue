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
        class="grey--text text--darken-4 mb-1"
        v-text="message"
      />

      <p
        class="mb-0"
        v-text="timestamp"
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
      required: true
    }
  }
}
</script>
