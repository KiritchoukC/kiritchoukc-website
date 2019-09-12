<template>
  <v-row justify="center" align="center" class="fill-height">
    <v-col :cols="$breakpoint.is.smAndUp ? 6 : 12">
      <p class="display-1">About me...</p>
      <p class="title">How did I become a developer</p>
      <p class="body-1">
        My name is Clément, I'm a 25 years old Belgian developer.
      </p>
      <p class="body-1">
        I've started developing when I was 16, I had Java, Web and Managing
        classes. Web classes were about HTML & CSS and some Gimp. And I learned
        VBA in Managing classes.
      </p>
      <p class="body-1">
        I then pursue studying computer sciences where I continue learning Java,
        web technologies, accounting and in depth computer hardware and systems
      </p>
      <p class="body-1">
        While I was looking for work, I got in contact with a company that
        worked with Microsoft technologies. I started learning .NET Framework
        and C# and got hooked.
      </p>
      <p class="body-1">
        And then until now, I continued working with .NET, building apps and
        apis. In my free time I was eager to learn more about other technologies
        like front-end frameworks Angular-React-VueJs, mobile framework like
        Flutter and many more (Docker, SQL, Postgresql, python, Go, GraphQL,
        PWA, ...).
      </p>
      <p class="title">Meet my family</p>
      <v-img
        class="elevation-6"
        src="/media/family_238px.webp"
        srcset="/media/family_950px.webp 950w, /media/family_713px.webp 713w, /media/family_475px.webp 475w, /media/family_238px.webp 238w"
        width="950px"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'About'
    }
  },
  transition: {
    name: 'fade'
  }
}
</script>

<style lang="scss" scoped></style>
