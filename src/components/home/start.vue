<template>
  <v-row justify="center" :class="$breakpoint.is.mdAndUp ? 'vh-97' : 'h-840'">
    <v-col class="d-none d-md-flex">
      <v-spacer></v-spacer>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <div :class="$breakpoint.is.mdAndUp ? 'mr-100' : 'mr-0'">
          <logo></logo>
        </div>
        <div>
          <div class="hr--vertical d-none d-md-flex"></div>
        </div>
        <div
          :style="
            $breakpoint.is.mdAndUp ? 'margin-left:60px; width:296px;' : ''
          "
          :class="$breakpoint.is.mdAndUp ? '' : 'mx-4'"
        >
          <p
            :class="
              $breakpoint.is.mdAndUp ? 'display-4' : 'display-2 text-center'
            "
          >
            Kiritchouk Clément
          </p>
          <p
            :class="
              $breakpoint.is.mdAndUp
                ? 'grey--text text-darken-2 display-1 mt-8'
                : 'grey--text text-darken-2 headline mt-8 text-center'
            "
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
    handleScroll(e) {
      this.chevronDownOpacity = 0.8 - window.scrollY / 1000
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

.mr-100 {
  margin-right: 100px;
}

.vh-97 {
  height: 97vh;
}

.h-840 {
  height: 840px;
}
</style>
