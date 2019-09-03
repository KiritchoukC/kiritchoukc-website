<template>
  <v-app dark>
    <v-app-bar fixed app :hidden="!showAppBar"></v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <custom-footer :hidden="!showFooter">
      <span>Kiritchouk Clément - &copy; 2019</span>
      <div>
        Github Icon made by
        <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy"
          >Dave Gandy</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>
      <div>
        LinkedIn Icon made by
        <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon"
          >SimpleIcon</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>
      <div>
        Twitter Icon made by
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
          >Pixel perfect</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>
    </custom-footer>
  </v-app>
</template>

<script>
import customFooter from '@/components/footer.vue'
export default {
  components: {
    customFooter
  },
  data() {
    return {
      showAppBar: false,
      showFooter: false
    }
  }
}
</script>
