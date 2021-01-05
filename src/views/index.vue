<!--
 * @Author: wangmeng
 * @Date: 2021-01-04 16:12:55
 * @LastEditTime: 2021-01-04 17:21:00
 * @LastEditors: wangmeng
 * @Description: In User Settings Edit
 * @FilePath: https://github.com/wangmeng456/bs-app-vue/blob/master/src/views/index.vue
-->
<template>
  <div class="home">
    <div class="carousel">
      <el-carousel :interval="5000">
        <el-carousel-item v-for="(item, index) in carouselData" :key="index">
          <img :src="item.img" alt="暂无图片" />
        </el-carousel-item>
      </el-carousel>
      <div class="classification">
        <div v-for="(item, index) in btnData" :key="index">
          <el-card class="box-card" shadow="hover">
            <img
              :src="require('@/assets/image/home/img-' + index + '.png')"
              alt="暂无图片"
            />
            <div class="box-font">{{ item.title }}</div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">推荐作品</div>
      <div class="box">
        <div v-for="(item, index) in boxDatas" :key="index">
          <el-row>
            <el-col :span="6">
              <el-card v-if="item[index]" class="box-card" shadow="hover">
                <img :src="item[index].img" alt="暂无图片" />
                <div class="box-font">
                  <div class="box-title">{{ item[index].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index].head" alt="暂无图片" />
                    <span>{{ item[index].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index+1]" class="box-card" shadow="hover">
                <img :src="item[index+1].img" alt="暂无图片" />
                <div class="box-font">
                  <div class="box-title">{{ item[index+1].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index+1].head" alt="暂无图片" />
                    <span>{{ item[index+1].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index+2]" class="box-card" shadow="hover">
                <img :src="item[index+2].img" alt="暂无图片" />
                <div class="box-font">
                  <div class="box-title">{{ item[index+2].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index+2].head" alt="暂无图片" />
                    <span>{{ item[index+2].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index+3]" class="box-card" shadow="hover">
                <img :src="item[index+3].img" alt="暂无图片" />
                <div class="box-font">
                  <div class="box-title">{{ item[index+3].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index+3].head" alt="暂无图片" />
                    <span>{{ item[index+3].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">优秀课程</div>
      <div class="box">
        <div v-for="(item, index) in boxDatas" :key="index">
          <el-row>
            <el-col :span="6">
              <el-card v-if="item[index]" class="box-card" shadow="hover">
                <img :src="item[index].img" alt="暂无图片" />
                <div class="box-font">
                  <div class="box-title">{{ item[index].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index].head" alt="暂无图片" />
                    <span>{{ item[index].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index+1]" class="box-card" shadow="hover">
                <img :src="item[index+1].img" alt="暂无图片" />
                <div class="box-font">
                  <div class="box-title">{{ item[index+1].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index+1].head" alt="暂无图片" />
                    <span>{{ item[index+1].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index+2]" class="box-card" shadow="hover">
                <img :src="item[index+2].img" alt="暂无图片" />
                <div class="box-font">
                  <div class="box-title">{{ item[index+2].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index+2].head" alt="暂无图片" />
                    <span>{{ item[index+2].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index+3]" class="box-card" shadow="hover">
                <img :src="item[index+3].img" alt="暂无图片" />
                <div class="box-font">
                  <div class="box-title">{{ item[index+3].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index+3].head" alt="暂无图片" />
                    <span>{{ item[index+3].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      carouselData: [
        { img: require("@/assets/image/home/bg-one.png") },
        { img: require("@/assets/image/home/bg-two.png") },
        { img: require("@/assets/image/home/bg-three.png") },
      ],
      btnData: [
        { title: "开始Python编程" },
        { title: "开始C++编程" },
        { title: "开始JS编程" },
        { title: "竞赛专区" },
      ],
      boxData: [
        {
          img: require("@/assets/image/home/work-0.png"),
          title: "圈圈大作战",
          head: require("@/assets/image/home/head-0.png"),
          name: "太难啦",
        },
        {
          img: require("@/assets/image/home/work-1.png"),
          title: "太空探险",
          head: require("@/assets/image/home/head-1.png"),
          name: "我無了",
        },
        {
          img: require("@/assets/image/home/work-2.png"),
          title: "小猫捉虫子",
          head: require("@/assets/image/home/head-0.png"),
          name: "太难啦",
        },
        {
          img: require("@/assets/image/home/work-3.png"),
          title: "星空逐梦",
          head: require("@/assets/image/home/head-1.png"),
          name: "我無了",
        },
        {
          img: require("@/assets/image/home/work-1.png"),
          title: "太空探险",
          head: require("@/assets/image/home/head-1.png"),
          name: "我無了",
        },
        {
          img: require("@/assets/image/home/work-2.png"),
          title: "小猫捉虫子",
          head: require("@/assets/image/home/head-0.png"),
          name: "太难啦",
        },
        {
          img: require("@/assets/image/home/work-3.png"),
          title: "星空逐梦",
          head: require("@/assets/image/home/head-1.png"),
          name: "我無了",
        },
      ],
      boxDatas: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      for (let i = 0; i < this.boxData.length; ) {
        this.boxDatas.push(this.boxData.slice(i, (i += 4)));
      }
    },
  },
};
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  .carousel {
    width: 100%;
    height: 500px;
    position: relative;
    .el-carousel__container {
      height: 500px;
    }
    .el-carousel__indicators,
    .el-carousel__arrow {
      display: none !important;
    }
    img {
      width: 100%;
      height: 500px;
    }
    .classification {
      width: 100%;
      padding: 0 100px;
      position: absolute;
      z-index: 99;
      top: 300px;
      display: flex;
      justify-content: space-around;
      .el-card {
        border: 0px solid #000 !important;
      }
      .box-card {
        width: 200px;
        cursor: pointer;
        .el-card__body {
          padding: 0;
        }
        img {
          width: 100%;
          height: 120px;
        }
        .box-font {
          width: 100%;
          text-align: center;
          padding: 8px 0;
          font-size: 16px;
        }
      }
    }
  }
  .content {
    .title {
      font-size: 36px;
      font-weight: 700;
      text-align: center;
      margin-top: 40px;
      color: #000;
    }
    .title::after {
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
      .el-card {
        border: 0px solid #000 !important;
      }
      .box-card {
        cursor: pointer;
        margin: 20px;
      }
      .el-card__body {
        padding: 0;
      }
      img {
        width: 100%;
      }
      .box-font {
        width: 100%;
        padding: 8px 10px;
        .box-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .box-teacher {
          img {
            width: 30px;
            height: 30px;
            border-radius: 30px;
            vertical-align: middle;
          }
          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>