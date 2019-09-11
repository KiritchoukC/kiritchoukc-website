<template>
  <v-card
    dark
    ripple
    :min-height="$breakpoint.is.smAndUp ? 700 : 450"
    hover
    to="/about"
    nuxt
    width="400"
  >
    <v-img
      position="top center"
      :height="$breakpoint.is.smAndUp ? '700px' : '450px'"
      srcset="/media/me_400px.jpg 400w, /media/me_300px.jpg 300w, /media/me_200px.jpg 200w, /media/me_100px.jpg 100w"
      src="/media/me_100px.jpg"
      width="400px"
      gradient="to top left, #000000BB, #000000BB, #000000BB"
    >
      <v-card-text>
        <p class="display-2 grey--text text--lighten-1">About</p>
        <hr class="mt-8 grey" />
        <p class="mt-1 subtitle-1 grey--text text--lighten-5">Who am I ?</p>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
hr {
  width: 50%;
}
</style>
