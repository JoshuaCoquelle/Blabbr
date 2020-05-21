<template>
  <div>
    <AppShell>
      <MainChatWindow />
    </AppShell>
  </div>
</template>

<script>
import AppShell from '@/components/layout/AppShell'
import MainChatWindow from '@/components/layout/MainChatWindow'

export default {
  name: 'AppScreen',

  components: {
    AppShell,
    MainChatWindow
  }
}
</script>
