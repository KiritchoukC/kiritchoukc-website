<template>
  <v-app-bar
    app
    :scroll-threshold="
      $breakpoint.is.smAndUp ? (scrollable ? '600' : '0') : '9999'
    "
    :inverted-scroll="scrollable"
    flat
    :color="$breakpoint.is.smAndUp ? 'transparent' : 'white'"
  >
    <v-btn icon ripple to="/" nuxt class="mr-3" title="Kiritchouk Clément Logo">
      <logo :height="'40px'" :width="'40px'"></logo>
    </v-btn>
    <template v-if="$breakpoint.is.smAndUp">
      <transition-group v-if="showMenu" appear name="menu">
        <v-btn
          :key="0"
          title="Go to Projects page"
          text
          ripple
          to="/projects"
          nuxt
          active-class="btn--active"
          >Projects</v-btn
        >
        <v-btn
          :key="1"
          title="Go to Contact page"
          text
          ripple
          to="/contact"
          nuxt
          active-class="btn--active"
          >Contact</v-btn
        >
        <v-btn
          :key="2"
          title="Go to About page"
          text
          ripple
          to="/about"
          nuxt
          active-class="btn--active"
          >About</v-btn
        >
      </transition-group>
    </template>
    <template v-else>
      <transition-group v-if="showMenu" appear name="menu">
        <v-btn
          :key="0"
          text
          ripple
          to="/projects"
          nuxt
          active-class="btn--active"
          icon
          title="My projects history"
        >
          <v-icon>mdi-timeline</v-icon>
        </v-btn>
        <v-btn
          :key="1"
          text
          ripple
          to="/contact"
          nuxt
          active-class="btn--active"
          icon
          title="Contact me"
        >
          <v-icon>mdi-email</v-icon>
        </v-btn>
        <v-btn
          :key="2"
          text
          ripple
          to="/about"
          nuxt
          active-class="btn--active"
          icon
          title="About me"
        >
          <v-icon>mdi-account-question</v-icon>
        </v-btn>
      </transition-group>
    </template>
    <div class="flex-grow-1"></div>
    <template v-if="$breakpoint.is.smAndUp">
      <v-btn icon title="Go to my Dev profile">
        <a
          href="https://dev.to/kiritchoukc"
          target="_blank"
          rel="noopener"
          aria-label="Go to my Dev profile"
        >
          <github-logo
            :height="'30px'"
            :width="'30px'"
            class="grey--text text--darken-1"
            style="fill:currentColor"
          ></github-logo>
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
            :height="'30px'"
            :width="'30px'"
            class="grey--text text--darken-1"
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
            :height="'30px'"
            :width="'30px'"
            class="grey--text text--darken-1"
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
            :height="'30px'"
            :width="'30px'"
            class="grey--text text--darken-1"
            style="fill:currentColor"
          ></linkedin-logo>
        </a>
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script>
import githubLogo from '@/components/github-logo.vue'
import twitterLogo from '@/components/twitter-logo.vue'
import linkedinLogo from '@/components/linkedin-logo.vue'
import logo from '@/components/logo.vue'

export default {
  components: {
    githubLogo,
    linkedinLogo,
    twitterLogo,
    logo
  },
  props: {
    scrollable: { type: Boolean, default: false },
    showMenu: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss" scoped>
.btn--active::after {
  content: '';
  background-color: var(--v-accent-base);
  width: 70%;
  height: 2px;
  position: absolute;
  bottom: -5px;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s;
  will-change: opacity;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
}
</style>
