<template>
  <div class='flip-list'>
    <div class="opts">
      <el-button size='small' type='primary' @click="add">add</el-button>
      <el-button size='small' type='primary' @click='shuffleList'>shuffle</el-button>
    </div>
    <ul>
      <li ref='lis' v-for='item in list' :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data: () => ({
    list: new Array(1).fill().map((_, i) => i)
  }),
  methods: {
    getPosition (doms) {
      return doms.map(el => {
        const { left, top } = el.getBoundingClientRect()
        return { left, top }
      })
    },
    async shuffleList () {
      let shuffle = await import('lodash.shuffle')
      shuffle = shuffle.default
      const func = () => (this.list = shuffle(this.list))
      this.scheduleAnimation(func)
    },
    add () {
      const func = () => this.list.unshift(this.list.length)
      this.scheduleAnimation(func)
    },
    async scheduleAnimation (update) {
      const oldLis = this.$refs.lis.slice()
      const oldPositions = this.getPosition(oldLis)
      update() // dom not change now
      // dom change
      await this.$nextTick()
      // get position
      const newLis = this.$refs.lis.slice()
      const newPositions = this.getPosition(newLis)
      // invert
      oldLis.forEach((li, index) => {
        const invert = {
          left: oldPositions[index].left - newPositions[index].left,
          top: oldPositions[index].top - newPositions[index].top
        }
        const keyframes = [
          // 初始位置是倒置后的位置
          {
            transform: `translate(${invert.left}px, ${invert.top}px)`
          },
          // 图片更新后本来应该在的位置
          { transform: 'translate(0)' }
        ]
        const options = {
          duration: 800,
          easing: 'cubic-bezier(0,0,0.32,1)'
        }
        // 开始运动！
        const _ = li.animate(keyframes, options)
      })
    }
  }
}
</script>

<style lang="scss">
.flip-list {
  .opts {
    display:flex;
    align-items: center;

    justify-content: center;
  }
  ul {
    list-style: none;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    li {
      width: 15vw;
      height: 15vw;
      background-color: lightpink;
      margin: 1rem;
      line-height: 15vw;
      text-align: center;
    }
  }
}
</style>
