<template>
  <img
    srcset="
      /media/logo_512px.webp 512w,
      /media/logo_384px.webp 384w,
      /media/logo_256px.webp 256w,
      /media/logo_128px.webp 128w
    "
    src="/media/logo_128px.webp"
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
