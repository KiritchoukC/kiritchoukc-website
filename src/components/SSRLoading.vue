<template>
  <div>
    <span v-if="!initialised">
      <loader></loader>
    </span>
    <slot />
  </div>
</template>

<script>
import loader from '@/components/loader.vue'

export default {
  components: {
    loader
  },
  data() {
    return {
      initialised: false
    }
  },
  async mounted() {
    await this.$nextTick()
    this.initialised = true
  }
}
</script>

<style lang="scss" scoped>
.d-none {
  display: none;
}
</style>
