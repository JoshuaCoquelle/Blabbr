<template>
  <v-app-bar
    app
    flat
    color="blue"
    dark
    v-bind="$attrs"
  >
    <!-- drawer trigger -->
    <v-app-bar-nav-icon
      v-if="isMobile"
      @click="$emit('toggleDrawer')"
    />
      <!-- @click.stop="drawer = !drawer" -->

    <!-- nav branding -->
    <v-toolbar-title class="pl-0">
      <h3 class="font-weight-bold">
        KnakYak <v-icon class="pl-1 pb-2">mdi-chat</v-icon>
      </h3>
    </v-toolbar-title>

    <v-spacer />

    <!-- user display name -->
    <v-toolbar-title>
      <h4
        class="font-weight-bold pb-1"
        v-text="userData.displayName || ''"
      />
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Toolbar',

  computed: {
    ...mapGetters(['userData'])
  },

  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  }
}
</script>
