<template>
  <div>
    <button @click="goFlip">go flip test</button>
  </div>
</template>

<script>
export default {
  methods: {
    goFlip() {
      this.$router.push("flipList");
    }
  }
};
</script>