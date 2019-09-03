<template>
  <v-app dark>
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
