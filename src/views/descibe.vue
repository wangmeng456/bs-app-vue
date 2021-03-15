<!--
 * @Author: wangmeng
 * @Description: 简介页
-->
<template>
  <div class="descibe">
    <div class="title">
      <h1>编程教育</h1>
      <p>学习编程不是要成为程序员，而是要理解下一个时代。</p>
      <p>
        让所有孩子都能接受到机器人编程教育，希望孩子们都在同一起跑线上起跑。
      </p>
      <p>
        少儿编程为未来教育所需，我们尽力为孩子及家长做实事，让孩子们未来可期。
      </p>
      <el-button type="warning" @click="handleLogin">学习平台</el-button>
    </div>
    <div class="content">
      <div class="header">为什么学习少儿编程</div>
      <div class="box">
        <el-row :gutter="50">
          <el-col :span="8">
            <el-card class="box-card">
              <h2>孩子学习上特别粗心？</h2>
              <div>
                在编程的世界里<br />
                程序有错就不会如期运行<br />
                自然而然养成细心的好习惯<br />
                <span>提高学科能力</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <h2>数学不好？逻辑思维差？</h2>
              <div>
                编程需要强大的逻辑思维能力<br />
                程序有错就不会如期运行<br />
                抓住数学逻辑启蒙黄金期<br />
                <span>提升逻辑思维</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <h2>怕被人工智能时代淘汰？</h2>
              <div>
                智能化是未来的趋势<br />
                通过编程学会和智能机器沟通<br />
                拥有通向未来的能力，让未来魅力无穷<br />
                <span>增强未来竞争力</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="content">
      <div class="header">教学特色</div>
      <div class="box">
        <el-row :gutter="50">
          <el-col :span="8">
            <el-card class="box-card">
              <h2>渐进式的难度梯度</h2>
              <div>
                基于孩子的认知发展和学习特点，构建可持续、可拓展、可延伸的动态发展课程体系，由浅入深，由易到难，有效率、更轻松。
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <h2>渐进式的难度梯度</h2>
              <div>
                基于孩子的认知发展和学习特点，构建可持续、可拓展、可延伸的动态发展课程体系，由浅入深，由易到难，有效率、更轻松。
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <h2>渐进式的难度梯度</h2>
              <div>
                基于孩子的认知发展和学习特点，构建可持续、可拓展、可延伸的动态发展课程体系，由浅入深，由易到难，有效率、更轻松。
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { Video } from "@/components/Video/index.vue";
export default {
  name: "descibe",
  components: {Video},
  data() {
    return {
      reasonData: [{}],
    };
  },
  created() {},
  methods: {
    handleLogin() {
      this.$router.push({ path: this.redirect || "/login" });
    },
  },
};
</script>

<style lang="scss">
.descibe {
  height: 100%;
  .title {
    display: block;
    height: 100%;
    background-size: cover;
    background-image: url("../assets/image/login.png");
    background-repeat: no-repeat;
    color: #ffffff;
    text-align: center;
    line-height: 36px;
    padding: 14% 0 0 0;
    h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
    }
    .el-button {
      width: 20%;
      margin-top: 20px;
      height: 40px;
    }
    .el-button--warning {
      font-size: 16px;
    }
  }
  .content {
    width: 100%;
    margin: 40px 0;
    .header {
      font-size: 36px;
      font-weight: 700;
      text-align: center;
      color: #000;
      margin: 10px 0 30px 0;
    }
    .header::after {
      content: "";
      display: block;
      height: 4px;
      width: 40px;
      background-color: #ff7722;
      text-align: center;
      margin: 6px auto 10px;
    }
    .box {
      width: 100%;
      padding: 0 80px;
      .box-card {
        h2 {
          margin: 10px 0;
        }
        div {
          line-height: 30px;
          span {
            color: #ff7722;
          }
        }
      }
    }
  }
}
</style>