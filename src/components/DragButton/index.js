const draggable = {
  // 实现在父元素中可自由拖动
  // 父元素需要设置相对定位
  inserted: function(el, binding) {
    // el.style.cursor = 'move'
    // 阻止拖拽的时候复制文字
    document.onselectstart = function() {
      return false
    }
    el.onmousedown = function(e) {
      // el.offsetLeft 子元素距离父元素left的距离
      // el.offsetTop  父元素距离父元素top的距离
      // e.pageX 鼠标距离页面left的距离
      // e.pageY 鼠标距离页面top的距离
      // disx 父元素到页面x的距离+鼠标相对元素left上的距离
      // disy 父元素到页面y的距离+鼠标相对元素top上的距离
      const disx = e.pageX - el.offsetLeft
      const disy = e.pageY - el.offsetTop
      let isClick = true
      document.onmousemove = function(e) {
        // x 移动后鼠标相对父元素x的距离
        // y 移动后鼠标相对父元素y的距离
        let x = e.pageX - disx
        let y = e.pageY - disy
        console.log(x, e.pageX, disx, y, e.pageY, disy)
        isClick = false
        // maxX,maxY可移动的最大宽高
        const maxX = el.parentElement.clientWidth - 60
        const maxY = el.parentElement.clientHeight - 60
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function() {
        el.style.cursor = 'pointer'
        document.onmousemove = document.onmouseup = null
        if (isClick === true) {
          binding.value.set(true)
        } else {
          binding.value.set(false)
          isClick = true
        }
      }
      return false
    }
  }
}
export default draggable
