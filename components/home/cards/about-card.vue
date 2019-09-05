<template>
  <v-card dark ripple min-height="700" hover to="/about" nuxt width="400">
    <v-img
      height="700px"
      src="/media/Me.jpg"
      gradient="to top left, #000000BB, #000000BB, #000000BB"
    >
      <v-card-text>
        <p class="display-2 grey--text text--lighten-1">About</p>
        <hr class="mt-8 grey" />
        <p class="mt-1 subtitle-1 grey--text text--lighten-5">
          If you want to know more about me
        </p>
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
