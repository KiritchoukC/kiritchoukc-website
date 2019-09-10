<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <start></start>
      </v-col>
      <v-col>
        <home></home>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import start from '@/components/home/start.vue'
import home from '@/components/home/home.vue'

export default {
  head() {
    return {
      title: 'Home'
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
