<template>
  <v-card
    dark
    ripple
    :min-height="$breakpoint.is.smAndUp ? 700 : 450"
    hover
    to="/contact"
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
  background: linear-gradient(
    to top left,
    var(--v-accent-darken3),
    var(--v-accent-darken4)
  );
}
</style>
