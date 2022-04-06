<template>
  <div
      class="xuanfu"
      ref="ball"
      id="moveDiv"
      @mousedown="down"
      @touchstart="down"
      @mousemove.stop.prevent="move"
      @touchmove.stop.prevent="move"
      @mouseup="end"
      @touchend="end"
      @click="goTel"
  >
    <a href="#" draggable="true">
      <img src="@/assets/img/home/phone_message.png" alt="" id="concat_img" >
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flags: false,
      moveDiv:'',
      position: { x: 0, y: 0 },
      nx: '',
      ny: '',
      dx: '',
      dy: '',
      xPum: '',
      yPum: ''
    };
  },

  components: {},

  computed: {},

  created() {},
  mounted(){
    this.moveDiv = this.$refs.ball;
  },

  methods: {
    /**
     * 打電話
     */
    goTel() {
      window.href = "tel:6016-5535691"
    },
    // 实现移动端拖拽
    down() {
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = this.moveDiv.offsetLeft;
      this.dy = this.moveDiv.offsetTop;
    },
    move() {
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.dx + this.nx;
        this.yPum = this.dy + this.ny;
        let LimitX =
            document.documentElement.clinetWidth || document.body.clientWidth;
        let limitY =
            document.documentElement.clientHeight || document.body.clientHeight;
        if (
            this.xPum < 0 ||
            this.yPum<0||
            this.xPum > LimitX - this.moveDiv.offsetWidth ||
            this.yPum >limitY -this.moveDiv.offsetHeight
        ) {
          return false;
        }
        this.moveDiv.style.left = this.xPum + 'px';
        this.moveDiv.style.top = this.yPum + 'px';
        //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
        document.addEventListener(
            'touchmove',
            function() {
              event.preventDefault();
            },
            false
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.xuanfu {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: fixed;
  right: 6.25rem;
  bottom: 5rem;
  text-align: center;
  line-height: 48px;
  @media screen and (max-width: 1200px) {
    right: 3rem;
    bottom: 2rem;
  }
}
#concat_img{
  width: 5rem;
  @media screen and (max-width: 1200px) {
    width: 40px;
  }
}
</style>
