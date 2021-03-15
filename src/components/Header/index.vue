<!--
 * @Author: wangmeng
 * @Description: 头部组件
-->
<template>
  <div class="header">
    <div class="logo">
      <div><img src="@/assets/image/profile.jpg" /></div>
      <div><span>毕设</span></div>
    </div>
    <div class="profile">
      <el-popover placement="bottom" v-model="visible">
          <div @click="personalCenter" :style="router === '/personalCenter' ? 'cursor: pointer;color: #1890ff' : 'cursor: pointer;'">个人中心</div>
          <br/>
          <div @click="personalEdit" :style="router === '/personalEdit' ? 'cursor: pointer;color: #1890ff' : 'cursor: pointer;'">修改资料</div>
          <br/>
          <div @click="outPut" style="cursor: pointer;">退出登录</div>
        <button slot="reference">
          <img src="@/assets/image/profile.jpg" />
        </button>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
        visible: false,
        router: ''
    };
  },
  mounted() {
    this.router = this.$route.path;
    console.log(this.router)
  },
  watch: {
    $route: function (to, from) {
      //from 对象中包含当前地址
      //to 对象中包含目标地址
      console.log(to);
    },
  },
  methods: {
      personalCenter() {
          this.visible = false;
          this.$router.push({
              path: '/personalCenter'
          })
      },
      personalEdit() {
          this.visible = false;
          this.$router.push({
              path: '/personalEdit'
          })
      },
      outPut() {
          this.visible = false;
          this.$router.replace({
              path: '/login'
          })
      }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 9999;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: flex;
    justify-content: left;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      display: inline;
      font-size: 20px;
      font-weight: 600;
      margin-left: 10px;
    }
  }
  .profile {
    img {
      width: 30px;
      height: 30px;
      border-radius: 30px;
    }
    button {
      border: 0;
      background: transparent;
    }
  }
}
</style>