<template>
  <v-btn
    v-bind="$attrs"
    v-on=$listeners
    depressed
    dark
    block
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'Btn'
}
</script>
