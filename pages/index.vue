<template>
  <v-container class="fill-height">
    <v-col>
      <v-row>
        <start></start>
      </v-row>
      <v-row>
        <home></home>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import start from '@/components/home/start.vue'
import home from '@/components/home/home.vue'

export default {
  head() {
    return {
      title: 'KiritchoukC - Home'
    }
  },
  layout: 'home',
  components: {
    start,
    home
  },
  transition: {
    name: 'fade'
  }
}
</script>

<style lang="scss" scoped></style>
