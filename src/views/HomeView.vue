<template>
  <div class="home">
    <router-link class="home-link" to="/navbar-test"> 测试navbar </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped lang="scss">
.home {
  padding: 100px;

  font-size: 16px;
  font-family: PingFangSC-Semibold-, PingFangSC-Semibold, sans-serif;
  font-weight: normal;
  color: #23252a;

  .home-link {
    margin-right: 32px;
    margin-bottom: 32px;
  }
}
</style>
