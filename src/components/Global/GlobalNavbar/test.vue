<template>
  <div class="test">
    <navbar title="Home">
      <template slot="left">12</template>
      <template slot="center"></template>
      <template slot="right">12</template>
    </navbar>
  </div>
</template>

<script>
import Navbar from "./GlobalNavbar";
export default {
  name: "navbar-test",
  components: {
    Navbar,
  },
};
</script>
