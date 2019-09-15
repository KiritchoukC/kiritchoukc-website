<template>
  <v-app
    dark
    :class="$breakpoint.is.mdAndUp ? '' : 'horizontal-scroll--disabled'"
  >
    <v-content>
      <nuxt />
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appFooter from '@/components/footer.vue'

export default {
  components: {
    appFooter
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.horizontal-scroll--disabled {
  overflow-x: hidden;
}
</style>
