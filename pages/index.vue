<template lang="pug">
.container
  fit-text(:text="inputs || placeholder", height='95vh', :style="{ color }")
  fit-text.help(v-if="inputs", text="すぺーすきー で しゃべるよ", height='5vh')
</template>

<script>
import FitText from '~/components/fit-text'
import { getKana, addVoiceMark } from '~/util/kana'

export default {
  components: {
    FitText
  },

  data () {
    return {
      inputs: '',
      placeholder: 'ひらがな を おしてね'
    }
  },

  mounted () {
    window.addEventListener('keydown', this.keydown)
  },

  beforeDestroy () {
    window.removeEventListener('keydown', this.keydown)
  },

  computed: {
    color () {
      return this.inputs ? '#000' : '#999'
    }
  },

  methods: {
    keydown (event) {
      if (event.code === 'Space') {
        const synth = window.speechSynthesis
        const utter = new SpeechSynthesisUtterance(this.inputs)
        synth.speak(utter)
        this.inputs = ''
        return
      } 

      if (this.inputs.length > 30) {
        return
      }

      const c = getKana(event)

      if (!c) {
        return
      }

      if (c === '゛' || c === '゜') {
        this.inputs = this.inputs.replace(/.$/, m => addVoiceMark(m, c))
      } else {
        this.inputs += c
      }
    }
  }
}
</script>

<style lang="sass">
body
  font-family: "rounded-x-mplus-1c-medium"
  margin: 0 3%
</style>

<style lang="sass" scoped>
.help
  position: absolute
  bottom: 1vh
  color: #999
</style>

