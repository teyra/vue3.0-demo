<template>
  <div @click="changeTitle" class="title">{{ title }}</div>
</template>
<script lang="ts">
export default {
  name: "Poster",
  props: {
    title: {
      default: "",
      type: String,
    },
  },
  setup(props, ctx) {
    let changeTitle = () => {
      ctx.emit("change");
    };
    return {
      changeTitle,
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  color: #ffffff;
}
</style>
