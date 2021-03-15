<!--
 * @Author: wangmeng
 * @Description: 个人中心页
-->
<template>
  <div>
    <Header />
    <div class="personal">personalCenter</div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "personalCenter",
  components: { Header },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.personal {
  width: 1000px;
  margin: 70px auto;
  background: #fff;
  padding: 40px;
}
</style>