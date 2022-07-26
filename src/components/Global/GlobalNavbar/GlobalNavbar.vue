<template>
  <nav class="navbar">
    <!-- left -->
    <div class="left">
      <slot name="left">
        <img
          class="left-img"
          src="~@/assets/global/back.png"
          @click="onLeftClick"
          alt=""
        />
      </slot>
    </div>

    <!-- center -->
    <div class="center">
      <span class="center-span" v-show="!show_center_slot">{{ title }}</span>
      <div v-show="show_center_slot" ref="center">
        <slot name="center"></slot>
      </div>
    </div>

    <!-- right -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      show_center_slot: false,
    };
  },
  mounted() {
    // console.log(this.$refs.center.childNodes);
    this.show_center_slot = this.$refs.center.childNodes.length > 0;
  },
  methods: {
    onLeftClick() {
      // 1.可以直接在此组件中定义返回上一页的代码，但在 hybrid app 项目中还需要做判断是返回上一个页面还是调用app接口返回app页面
      // 2.如果需要额外的操作也可以发射事件到父组件中
      // this.$router.back();
      // this.$emit("navbar-back");
    },
  },
};
</script>

<style scoped lang="scss">
.navbar {
  height: 88px;
  padding: 0 40px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1);

  .left {
    width: 100px;
    text-align: left;

    .left-img {
      width: 40px;
      display: block;
    }
  }

  .center {
    .center-span {
      font-size: 32px;
      font-family: ”PingFangSC-Semibold“, ”PingFang SC“, sans-serif;
      font-weight: 600;
      color: #23252a;
    }
  }

  .right {
    width: 100px;
    text-align: right;
  }
}
</style>
