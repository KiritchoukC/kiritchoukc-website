<template>
  <div>
    <slot v-if="initialised" />
    <span v-if="!initialised">
      <loader></loader>
    </span>
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
