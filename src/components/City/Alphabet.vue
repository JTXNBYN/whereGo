<template>
  <ul class="city-aplhabet">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      >
      {{item}}
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    cityList: Object
  },
  data () {
    return {
      touchStart: false,
      timeId: null,
      startY: 0
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cityList) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStart = true
    },
    handleTouchMove (e) {
      if (this.touchStart) {
        if (this.timeId) {
          clearTimeout(this.timeId)
        }
        this.timeId = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)

          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStart = false
    }

  }
}
</script>
<style lang="scss" scoped>
.city-aplhabet{
  position: absolute;
  right: 0;
  top:79px;
  width: 20px;
  line-height: 20px;
  text-align: center;
  color:#00bcd4;
  display:flex;
  justify-content: center;
  flex-direction:column;
  height: 88%;
  z-index: 2;
}
</style>
