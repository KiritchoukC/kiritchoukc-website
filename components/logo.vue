<template>
  <img
    srcset="
      /media/logo_512px.png 512w,
      /media/logo_384px.png 384w,
      /media/logo_256px.png 256w,
      /media/logo_128px.png 128w
    "
    src="/media/logo_128px.png"
    alt="KiritchoukC Logo"
    title="KirithoukC Logo"
    :width="width"
    :height="height"
  />
</template>

<script>
export default {
  props: {
    width: { type: String, default: '256px' },
    height: { type: String, default: '256px' }
  }
}
</script>

<style lang="scss" scoped></style>
