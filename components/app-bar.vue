<template>
  <v-app-bar
    app
    :scroll-threshold="scrollable ? '600' : '0'"
    :inverted-scroll="scrollable"
    flat
    color="transparent"
  >
    <v-btn icon ripple to="/" nuxt class="mr-3">
      <logo :height="'40px'" :width="'40px'"></logo>
    </v-btn>
    <transition-group v-if="showMenu" appear name="menu">
      <v-btn :key="0" text ripple to="/projects" nuxt active-class="btn--active"
        >Projects</v-btn
      >
      <v-btn :key="1" text ripple to="/contact" nuxt active-class="btn--active"
        >Contact</v-btn
      >
      <v-btn :key="2" text ripple to="/about" nuxt active-class="btn--active"
        >About</v-btn
      >
    </transition-group>
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
