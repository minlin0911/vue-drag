<template>
  <div v-draggable="{set: setVal}" class="draggable-item" @click="flag && handleExport()">{{ buttonText }}</div>
</template>

<script>
import draggable from './index'
export default {
  // 自定义指令
  directives: {
    draggable
  },
  props: {
    buttonText: {
      type: String,
      default: '点击'
    }
  },
  data() {
    return {
      // 判断是否该点击是用于拖拽还是只是点击
      flag: true
    }
  },
  methods: {
    handleExport() {
      this.$emit('on-click')
    },
    setVal(val1) {
      this.flag = val1
    }
  }
}
</script>

<style lang="css" scoped>
  .draggable-item{
  z-index: 100;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #1991eb;
  position: absolute;
  -webkit-animation: circle 2s ease-out;
  -moz-animation: circle 2s ease-out;
  animation: circle 2s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  box-shadow: 0px 0px 0px #0788eb;
  cursor:pointer;
}
.btn-export-circle:hover{
  background-color: #0788eb;
}
@keyframes circle {
  0% {
    box-shadow: 0px 0px 5px rgba(7, 136, 235,.6);
    }
  25% {
       box-shadow: 0px 0px 15px rgba(7, 136, 235,.6);
    }
  50% {
    box-shadow: 0px 0px 25px rgba(7, 136, 235,.6);
  }
  75% {
    box-shadow: 0px 0px 35px rgba(7, 136, 235,.6);
  }
  100% {
    box-shadow: 0px 0px 45px rgba(7, 136, 235,.6);
  }
}
</style>
