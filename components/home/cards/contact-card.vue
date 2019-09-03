<template>
  <v-card
    dark
    ripple
    min-height="700"
    hover
    href="/contact"
    nuxt
    width="400"
    class="app-card"
  >
    <v-card-text>
      <p class="display-2 grey--text text--lighten-1">Contact</p>
      <hr class="mt-8 grey" />
      <p class="mt-1 subtitle-1 grey--text text--lighten-5">
        Send me a message
      </p>
    </v-card-text>
    <plane style="position:absolute; bottom:0;"></plane>
  </v-card>
</template>

<script>
import plane from '@/components/plane.vue'

export default {
  components: {
    plane
  }
}
</script>

<style lang="scss" scoped>
hr {
  width: 50%;
}

.app-card {
  background: linear-gradient(to top left, #1c463b, #1c2825);
}
</style>
