<template>
  <v-btn
    v-bind="$attrs"
    v-on=$listeners
    depressed
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'Btn'
}
</script>
