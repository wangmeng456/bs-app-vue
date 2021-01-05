<!--
 * @Author: wangmeng
 * @Date: 2021-01-04 16:12:55
 * @LastEditTime: 2021-01-05 14:04:12
 * @LastEditors: wangmeng
 * @Description: 登录页
 * @FilePath: https://github.com/wangmeng456/bs-app-vue/blob/master/src/views/login.vue
-->
<template>
  <div class="login">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <h3 class="title">毕设</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
        >
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <div class="register">
        <div>忘记密码？</div>
        <div>还没有账号，去<span>注册</span></div>
      </div>
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width: 100%"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2020-2021 bishe All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { getStore } from "@/utils/localStore";
import { setToken } from "@/utils/auth";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空" },
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" },
        ]
      },
      loading: false,
      redirect: undefined,
      tokenInfo: "",
    };
  },
  created() {
    // this.getCookie();
  },
  methods: {
    // getCookie() {
    //   const username = Cookies.get("username");
    //   const password = Cookies.get("password");
    //   this.loginForm = {
    //     username: username === undefined ? this.loginForm.username : username,
    //     password: password === undefined ? this.loginForm.password : password,
    //   };
    // },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$router.push({ path: this.redirect || "/index" });
          // this.$store
          //   .dispatch("Login", this.loginForm)
          //   .then((res) => {
          //     this.tokenInfo = res.token;
          //     this.saveTokenInfo();
          //     this.$router.push({ path: this.redirect || "/index" });
          //   })
          //   .catch(() => {
          //     this.loading = false;
          //     this.resetForm("loginForm");
          //   });
        }
      });
    },
    /**
     * 保存 token 信息
     */
    // saveTokenInfo() {
    //   setToken(this.tokenInfo);
    //   this.$store.commit("SET_TOKEN", this.tokenInfo);
    // },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;
  background-image: url("../assets/image/login.png");
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.register {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  cursor: pointer;
  span {
    color: #1890ff;
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>