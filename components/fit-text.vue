<template lang="pug">
.text-wrapper(:style="{ height }")
  .text(ref="text", :style="[textStyle, { fontSize, visibility }]") {{ text }}
</template>

<script>
export default {
  props: ['text', 'height'],

  data () {
    return {
      fontSizeMag: 1,
      fontSize: this.height,
      visibility: 'hidden',
      textStyle: {
        lineHeight: this.height,
        height: this.height
      }
    }
  },

  mounted () {
    this.calcFontSize()
    window.addEventListener('resize', this.calcFontSize)
    window.addEventListener('orientationchange', this.calcFontSize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.calcFontSize)
    window.removeEventListener('orientationchange', this.calcFontSize)
  },

  watch: {
    text () {
      this.$nextTick(this.calcFontSize)
    }
  },

  methods: {
    calcFontSize () {
      const el = this.$refs.text
      const p = el.parentNode

      const elw = el.clientWidth / this.fontSizeMag

      if (p.clientWidth < elw) {
        this.fontSizeMag = p.clientWidth / elw
      } else{
        this.fontSizeMag = 1
      }

      this.fontSize = `calc(${this.height} * ${this.fontSizeMag})`
      this.visibility = 'visible'
    }
  }
}
</script>

<style lang="sass" scoped>
.text-wrapper
  overflow: hidden
  text-align: center
  width: 100%
  > .text
    display: inline-block
    white-space: nowrap
</style>
