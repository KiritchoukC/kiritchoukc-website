<template>
  <v-footer dark absolute app color="accent darken-4">
    <v-row justify="center" align="center">
      <v-col
        :offset="$breakpoint.is.mdAndUp ? 4 : 0"
        :cols="$breakpoint.is.mdAndUp ? 4 : 12"
        align-self="center"
      >
        <v-row justify="center" align="center">
          <p>Designed & built by Kiritchouk Clément - &copy; 2019</p>
        </v-row>
        <template v-if="!$breakpoint.is.mdAndUp">
          <v-row align="center" style="justify-content: space-evenly">
            <v-btn icon title="Go to my Dev profile">
              <a
                href="https://dev.to/kiritchoukc"
                target="_blank"
                rel="noopener"
                aria-label="Go to my Dev profile"
              >
                <dev-logo
                  :height="'40px'"
                  :width="'40px'"
                  class="grey--text text--lighten-1"
                  style="fill:currentColor"
                ></dev-logo>
              </a>
            </v-btn>

            <v-btn icon title="Go to my Github profile">
              <a
                href="https://github.com/KiritchoukC"
                target="_blank"
                rel="noopener"
                aria-label="Go to my Github profile"
              >
                <github-logo
                  :height="'40px'"
                  :width="'40px'"
                  class="grey--text text--lighten-1"
                  style="fill:currentColor"
                ></github-logo>
              </a>
            </v-btn>

            <v-btn icon title="Go to my Twitter profile">
              <a
                href="https://twitter.com/CKiritchouk"
                target="_blank"
                rel="noopener"
                aria-label="Go to my Twitter profile"
              >
                <twitter-logo
                  :height="'40px'"
                  :width="'40px'"
                  class="grey--text text--lighten-1"
                  style="fill:currentColor"
                ></twitter-logo>
              </a>
            </v-btn>

            <v-btn icon title="Go to my LinkedIn profile">
              <a
                href="https://www.linkedin.com/in/cl%C3%A9ment-kiritchouk-46a666127/"
                target="_blank"
                rel="noopener"
                aria-label="Go to my LinkedIn profile"
              >
                <linkedin-logo
                  :height="'40px'"
                  :width="'40px'"
                  class="grey--text text--lighten-1"
                  style="fill:currentColor"
                ></linkedin-logo>
              </a>
            </v-btn>
          </v-row>
        </template>
      </v-col>
      <v-col :cols="$breakpoint.is.mdAndUp ? 4 : 12">
        <v-row>
          <v-col
            :cols="$breakpoint.is.mdAndUp ? 0 : 12"
            :class="$breakpoint.is.mdAndUp ? '' : 'text-center'"
          >
            Github Icon made by
            <a
              href="https://www.flaticon.com/authors/dave-gandy"
              title="Dave Gandy"
              class="grey--text text--lighten-1"
              aria-label="Go to my Dave Gandy FlatIcon profile"
              >Dave Gandy</a
            >
            from
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              class="grey--text text--lighten-1"
              aria-label="Go to my FlatIcon"
              >www.flaticon.com</a
            >
          </v-col>
          <v-col
            :cols="$breakpoint.is.mdAndUp ? 0 : 12"
            :class="$breakpoint.is.mdAndUp ? '' : 'text-center'"
          >
            Twitter Icon made by
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
              class="grey--text text--lighten-1"
              aria-label="Go to my Dave Pixel Perfect profile"
              >Pixel perfect</a
            >
            from
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              class="grey--text text--lighten-1"
              aria-label="Go to my FlatIcon"
              >www.flaticon.com</a
            >
          </v-col>
          <v-col
            :cols="$breakpoint.is.mdAndUp ? 0 : 12"
            :class="$breakpoint.is.mdAndUp ? '' : 'text-center'"
          >
            LinkedIn Icon made by
            <a
              href="https://www.flaticon.com/authors/simpleicon"
              title="SimpleIcon"
              class="grey--text text--lighten-1"
              aria-label="Go to my SimpleIcon FlatIcon profile"
              >SimpleIcon</a
            >
            from
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              class="grey--text text--lighten-1"
              aria-label="Go to my FlatIcon"
              >www.flaticon.com</a
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import githubLogo from '@/components/github-logo.vue'
import twitterLogo from '@/components/twitter-logo.vue'
import linkedinLogo from '@/components/linkedin-logo.vue'
import devLogo from '@/components/dev-logo.vue'

export default {
  components: {
    githubLogo,
    linkedinLogo,
    twitterLogo,
    devLogo
  }
}
</script>

<style lang="scss" scoped>
.v-footer {
  font-size: 16px;
}
</style>
