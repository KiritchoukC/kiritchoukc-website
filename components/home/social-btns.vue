<template>
  <v-row justify="space-around">
    <v-hover v-slot:default="{ hover }">
      <a href="https://github.com/KiritchoukC" target="_blank">
        <github-logo
          :class="
            hover ? 'grey--text text--darken-2' : 'grey--text text--darken-1'
          "
          fill="currentColor"
        ></github-logo>
      </a>
    </v-hover>
    <v-hover v-slot:default="{ hover }">
      <a href="https://twitter.com/CKiritchouk" target="_blank">
        <twitter-logo
          :class="
            hover ? 'grey--text text--darken-2' : 'grey--text text--darken-1'
          "
          fill="currentColor"
        ></twitter-logo>
      </a>
    </v-hover>
    <v-hover v-slot:default="{ hover }">
      <a
        href="https://www.linkedin.com/in/cl%C3%A9ment-kiritchouk-46a666127/"
        target="_blank"
      >
        <linkedin-logo
          :class="
            hover ? 'grey--text text--darken-2' : 'grey--text text--darken-1'
          "
          fill="currentColor"
        ></linkedin-logo>
      </a>
    </v-hover>
  </v-row>
</template>

<script>
import githubLogo from '@/components/github-logo.vue'
import twitterLogo from '@/components/twitter-logo.vue'
import linkedinLogo from '@/components/linkedin-logo.vue'

export default {
  components: {
    githubLogo,
    linkedinLogo,
    twitterLogo
  }
}
</script>

<style lang="scss" scoped></style>
