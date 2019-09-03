<template>
  <v-app-bar
    app
    scroll-threshold="600"
    inverted-scroll
    flat
    color="transparent"
  >
    <v-btn icon>
      <logo :height="'40px'" :width="'40px'"></logo>
    </v-btn>
    <div class="flex-grow-1"></div>
    <v-btn icon>
      <github-logo
        :height="'30px'"
        :width="'30px'"
        class="grey--text text--darken-1"
        style="fill:currentColor"
      ></github-logo>
    </v-btn>

    <v-btn icon>
      <twitter-logo
        :height="'30px'"
        :width="'30px'"
        class="grey--text text--darken-1"
        style="fill:currentColor"
      ></twitter-logo>
    </v-btn>

    <v-btn icon>
      <linkedin-logo
        :height="'30px'"
        :width="'30px'"
        class="grey--text text--darken-1"
        style="fill:currentColor"
      ></linkedin-logo>
    </v-btn>
  </v-app-bar>
</template>
<script>
import githubLogo from '@/components/github-logo.vue'
import twitterLogo from '@/components/twitter-logo.vue'
import linkedinLogo from '@/components/linkedin-logo.vue'
import logo from '@/components/small-logo.vue'

export default {
  components: {
    githubLogo,
    linkedinLogo,
    twitterLogo,
    logo
  }
}
</script>

<style lang="scss" scoped></style>
