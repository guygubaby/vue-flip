<template>
  <div class='home'>
    <el-button size='small' type='primary' @click="goFlip">flip test</el-button>
    <el-button size='small' type='success' @click="goDiv">div content change</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    goFlip () {
      this.$router.push('flipList')
    },
    goDiv () {
      this.$router.push('divChange')
    }
  }
}
</script>
<style lang="scss" scoped>
@mixin center {
  display:flex;
  justify-content: center;
  align-items: center;
}

.home {
  @include center;
  margin-top: 25vh;
}
</style>
