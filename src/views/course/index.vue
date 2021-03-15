<!--
 * @Author: wangmeng
 * @Description: 课程汇总页
-->
<template>
  <div class="course">
    <Header />
    <div class="container">
      <div class="top">
        <el-row>
          <el-col :span="16" class="select-left">
            <span
              @click="handleAll"
              :class="select === '年龄区间' ? 'active-all' : ''"
              >全部</span
            >
            <el-dropdown @command="handleCommand">
              <span :class="select === '年龄区间' ? '' : 'active-all'">
                {{ select }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in option"
                  :key="index"
                  :command="item.value"
                  >{{ item.name }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="8">
            <el-input
              placeholder="请输入关键词"
              v-model="input"
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
        </el-row>
      </div>
      <div class="box">
        <div class="table">
          <el-card
            v-for="(item, index) in table"
            :key="index"
            class="table-card"
            @click.native="handleDetail(item.id)"
          >
            <h1>{{ item.title }}</h1>
            <el-row :gutter="20">
              <el-col :span="8">
                <img :src="item.img" alt="暂无图片" />
              </el-col>
              <el-col :span="16">
                <div class="content-font">{{ item.content }}</div>
              </el-col>
            </el-row>
            <hr />
            <div class="events">
              <i class="el-icon-chat-round"></i>
              <span>{{ item.comment }}</span>
              <i class="el-icon-star-off"></i>
              <span>{{ item.collection }}</span>
              <i class="el-icon-user"></i>
              <span>{{ item.writer }}</span>
              <i class="el-icon-time"></i>
              <span>{{ item.date }}</span>
            </div>
          </el-card>
          <Pagination :total="total" :limit="limit" :pageSizes="pageSizes" />
        </div>
        <div class="side">
          <el-card class="side-card">
            <h3>热门推荐</h3>
            <div
              class="side-table"
              v-for="(item, index) in sideData"
              :key="index"
              @click="handleDetail(item.id)"
            >
              <img :src="item.img" alt="暂无图片" />
              <div class="side-title">{{ item.title }}</div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
export default {
  name: "course",
  components: { Header, Pagination },
  data() {
    return {
      input: "",
      select: "年龄区间",
      option: [
        { name: "6岁以下", value: 1 },
        { name: "6-9岁", value: 2 },
        { name: "9-12岁", value: 3 },
        { name: "12岁以上", value: 4 },
      ],
      table: [
        {
          title: "scratch入门课程-coding4fun系列",
          content:
            "本系列视频总计十章（总计200多个小视频），每章二十多节，每小节视频在2分钟左右，非常适合小孩子观看学习。第六课正在更新中~...",
          comment: 23,
          collection: 30,
          date: "2020-09-10 14:53",
          img: require("@/assets/image/home/bg-one.png"),
          writer: "bsssss",
          id: 1
        },
        {
          title: "scratch入门课程-coding4fun系列",
          content:
            "本系列视频总计十章（总计200多个小视频），每章二十多节，每小节视频在2分钟左右，非常适合小孩子观看学习。第六课正在更新中~...",
          comment: 23,
          collection: 30,
          date: "2020-09-10 14:53",
          img: require("@/assets/image/home/bg-one.png"),
          writer: "bsssss",
          id: 2
        },
        {
          title: "scratch入门课程-coding4fun系列",
          content:
            "本系列视频总计十章（总计200多个小视频），每章二十多节，每小节视频在2分钟左右，非常适合小孩子观看学习。第六课正在更新中~...",
          comment: 23,
          collection: 30,
          date: "2020-09-10 14:53",
          img: require("@/assets/image/home/bg-one.png"),
          writer: "bsssss",
          id: 3
        },
        {
          title: "scratch入门课程-coding4fun系列",
          content:
            "本系列视频总计十章（总计200多个小视频），每章二十多节，每小节视频在2分钟左右，非常适合小孩子观看学习。第六课正在更新中~...",
          comment: 23,
          collection: 30,
          date: "2020-09-10 14:53",
          img: require("@/assets/image/home/bg-one.png"),
          writer: "bsssss",
          id: 4
        },
      ],
      total: 4,
      limit: 4,
      pageSizes: [2, 4, 6],
      sideData: [
        {
          img: require("@/assets/image/home/bg-one.png"),
          title: "推荐推荐推荐推荐推荐推荐。。。。。",
          id: 5
        },
        {
          img: require("@/assets/image/home/bg-one.png"),
          title: "推荐推荐推荐推荐推荐推荐。。。。。",
          id: 6
        },
        {
          img: require("@/assets/image/home/bg-one.png"),
          title: "推荐推荐推荐推荐推荐推荐。。。。。",
          id: 7
        },
      ],
    };
  },
  mounted() {
    for (let i = 0; i < this.option.length; i++) {
      if (this.$route.query.id == this.option[i].value) {
        this.select = this.option[i].name;
      }
    }
  },
  watch: {
    $route: function (to, from) {
      //from 对象中包含当前地址
      //to 对象中包含目标地址
      // console.log(to.query.id);
    },
  },
  methods: {
    handleCommand(command) {
      for (let i = 0; i < this.option.length; i++) {
        if (command === this.option[i].value) {
          this.select = this.option[i].name;
        }
      }
      this.$router.push({
        path: "/course",
        query: { id: command },
      });
    },
    handleAll() {
      this.$router.push({
        path: "/course",
      });
      this.select = "年龄区间";
    },
    // 点击进入课程详情页
    handleDetail(data) {
      this.$router.push({
        path: "/courseDetails",
        query: {id: data}
      });
    }
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.course {
  width: 100%;
  .container {
    width: 100%;
    margin: 70px auto;
    background: #fff;
    padding: 10px 30px;
    .top {
      border-bottom: 1px solid #dcdfe6;
      padding-bottom: 10px;
      .select-left {
        margin-top: 5px;
        span {
          margin-right: 20px;
          cursor: pointer;
        }
        .active-all {
          color: #ffba00;
        }
      }
    }
    .box {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      .table {
        width: 70%;
        &-card {
          height: 280px;
          padding: 5px 20px;
          margin-bottom: 10px;
          h1 {
            margin-bottom: 10px;
          }
          img {
            width: 260px;
            height: 140px;
          }
          .content-font {
            margin-top: 10px;
            font-size: 16px;
          }
          .events {
            text-align: right;
            i {
              margin-left: 15px;
            }
            span {
              margin-left: 5px;
            }
          }
        }
      }
      .side {
        width: 26%;
        .side-table:hover {
          border: 1px solid #dcdfe6;
          box-shadow: 10px solid #dcdfe6;
        }
        .side-table {
          margin: 15px auto;
          width: 280px;
          padding: 10px 10px;
          img {
            width: 260px;
            height: 140px;
          }
          .side-title {
            font-size: 16px;
            width: 260px;
            overflow: hidden;
            text-overflow: ellipsis; // 溢出用省略号显示
            white-space: nowrap; // 溢出不换行
          }
        }
      }
    }
  }
}
</style>