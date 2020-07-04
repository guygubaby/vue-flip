<template>
  <div>
    <span ref='span' class="content">
      {{msg}}
    </span>
    <div class="opts">
      <el-button type='primary' @click='toogle'>toogle</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    msg: 'origin content'
  }),
  methods: {
    toogle () {
      if (this.msg === 'origin content') {
        this.change()
      } else {
        this.restore()
      }
    },
    change () {
      const func = () => (this.msg = new Array(200).fill(this.msg).join('\n'))
      this.scheduleAnimation(func)
    },
    restore () {
      const func = () => (this.msg = 'origin content')
      this.scheduleAnimation(func)
    },
    getWidthAndHeight (dom) {
      const { width, height } = dom.getBoundingClientRect()
      return { width, height }
    },
    async scheduleAnimation (update) {
      const oldSpan = this.$refs.span
      const oldWH = this.getWidthAndHeight(oldSpan)
      update()
      await this.$nextTick()
      const newSpan = this.$refs.span
      const newWH = this.getWidthAndHeight(newSpan)
      const keyframes = [
        {
          width: oldWH.width + 'px', height: oldWH.height + 'px'
        },
        {
          width: newWH.width + 'px', height: newWH.height + 'px'
        }
      ]
      const animation = oldSpan.animate(keyframes, {
        duration: 800,
        easing: 'cubic-bezier(0,0,0.32,1)'
      })
      oldSpan.classList.add('overflow-hidden')
      animation.onfinish = () => {
        oldSpan.classList.remove('overflow-hidden')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  display: inline-block;
  background-color: lightpink;
  border-radius: 2px;
}
.opts {
  margin-top: 10vh;
  display:flex;
  justify-content: center;
}
.overflow-hidden {
  overflow: hidden;
}
</style>
