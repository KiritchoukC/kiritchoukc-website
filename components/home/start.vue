<template>
  <v-row justify="center" style="height:97vh;">
    <v-col>
      <v-spacer></v-spacer>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <div style="margin-right:100px;">
          <logo></logo>
        </div>
        <div>
          <div class="hr--vertical"></div>
        </div>
        <div style="margin-left:60px; width:296px;">
          <p class="display-4">Kiritchouk Clément</p>
          <p
            class="grey--text text-darken-1 display-1 mt-8"
            style="white-space: nowrap"
          >
            Software Developer
          </p>
        </div>
      </v-row>
    </v-col>
    <v-col cols="4" align-self="center">
      <social-btns></social-btns>
    </v-col>
    <v-col cols="12" align-self="end">
      <v-row justify="center">
        <v-icon :style="{ opacity: chevronDownOpacity }"
          >mdi-chevron-down</v-icon
        >
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import socialBtns from '@/components/home/social-btns.vue'
import logo from '@/components/logo.vue'

export default {
  components: {
    socialBtns,
    logo
  },
  data() {
    return {
      chevronDownOpacity: 1
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll({ pageY }) {
      this.chevronDownOpacity = 0.8 - pageY / 1000
    }
  }
}
</script>

<style lang="scss" scoped>
.hr--vertical {
  content: '';
  width: 5px;
  height: 260px;
  background-color: #000;
}
</style>
