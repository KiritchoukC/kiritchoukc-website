<template>
  <ssr-loading>
    <v-app
      dark
      :class="$breakpoint.is.mdAndUp ? '' : 'horizontal-scroll--disabled'"
    >
      <v-content>
        <nuxt />
      </v-content>
      <app-footer></app-footer>
    </v-app>
  </ssr-loading>
</template>

<script>
import appFooter from '@/components/footer.vue'
import SSRLoading from '@/components/SSRLoading.vue'

export default {
  components: {
    appFooter,
    SsrLoading: SSRLoading
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
