<template>
  <div class="parentBox">
      <drag-button @on-click="handleClick" :buttonText="'点击'"></drag-button>
  </div>
</template>

<script>
import DragButton from './DragButton/index.vue'
export default {
  name: 'HelloWorld',
  props: {},
  components: { DragButton },
  methods: {
    handleClick() {
      alert('你点击了按钮')
    }
  }
}
</script>

<style scoped>
.parentBox{
  position: relative;
  height: 500px;
  width: 500px;
  border: 1px solid #69df69;
  margin: auto;
}
</style>
