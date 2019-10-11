<template>
  <v-card
    ripple
    :min-height="$breakpoint.is.smAndDown ? 450 : 700"
    hover
    to="/projects"
    nuxt
    width="400"
  >
    <v-card-text>
      <p class="display-2">Projects</p>
      <hr class="mt-8 grey" />
      <p class="mt-1 subtitle-1 black--text">All the projects I've worked on</p>
    </v-card-text>
    <iso-desk
      style="position:absolute;bottom:0px;transform: scale(1.4);transform-origin: bottom;"
    ></iso-desk>
  </v-card>
</template>

<script>
import isoDesk from '@/components/iso-desk.vue'

export default {
  components: {
    isoDesk
  }
}
</script>

<style lang="scss" scoped>
hr {
  width: 50%;
}
</style>
