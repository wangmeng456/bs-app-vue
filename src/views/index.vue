<!--
 * @Author: wangmeng
 * @Description: 学习社区页
-->
<template>
  <div class="home">
    <Header />
    <div class="carousel">
      <el-carousel :interval="5000">
        <el-carousel-item v-for="(item, index) in carouselData" :key="index">
          <img :src="item.img" alt="暂无图片" />
        </el-carousel-item>
      </el-carousel>
      <div class="classification">
        <div
          @click="handleCode(index)"
          v-for="(item, index) in btnData"
          :key="index"
        >
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
      <div class="title">优秀课程</div>
      <div class="box">
        <div v-for="(item, index) in videoDatas" :key="index">
          <el-row>
            <el-col :span="6">
              <el-card v-if="item[index]" class="box-card" shadow="hover">
                <Video :img="item[index].img" />
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
              <el-card v-if="item[index + 1]" class="box-card" shadow="hover">
                <Video :img="item[index + 1].img" />
                <div class="box-font">
                  <div class="box-title">{{ item[index + 1].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index + 1].head" alt="暂无图片" />
                    <span>{{ item[index + 1].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index + 2]" class="box-card" shadow="hover">
                <Video :img="item[index + 2].img" />
                <div class="box-font">
                  <div class="box-title">{{ item[index + 2].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index + 2].head" alt="暂无图片" />
                    <span>{{ item[index + 2].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index + 3]" class="box-card" shadow="hover">
                <Video :img="item[index + 3].img" />
                <div class="box-font">
                  <div class="box-title">{{ item[index + 3].title }}</div>
                  <div class="box-teacher">
                    <img :src="item[index + 3].head" alt="暂无图片" />
                    <span>{{ item[index + 3].name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">试题推荐</div>
      <div class="box">
        <div v-for="(item, index) in boxDatas" :key="index">
          <el-row>
            <el-col :span="6">
              <el-card v-if="item[index]" class="box-card" shadow="hover">
                <div class="box-font">
                  <div class="box-title">{{ item[index].title }}</div>
                  <div class="box-task">
                    <span>行业大佬试题推荐</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index + 1]" class="box-card" shadow="hover">
                <div class="box-font">
                  <div class="box-title">{{ item[index + 1].title }}</div>
                  <div class="box-task">
                    <span>行业大佬试题推荐</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index + 2]" class="box-card" shadow="hover">
                <div class="box-font">
                  <div class="box-title">{{ item[index + 2].title }}</div>
                  <div class="box-task">
                    <span>行业大佬试题推荐</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card v-if="item[index + 3]" class="box-card" shadow="hover">
                <div class="box-font">
                  <div class="box-title">{{ item[index + 3].title }}</div>
                  <div class="box-task">
                    <span>行业大佬试题推荐</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">教学体系</div>
      <div class="box">
        <div class="boxes">
          <div class="box-list" v-for="(item, index) in boxList" :key="index">
            <!-- <el-button :icon="item.icon" size="mini" type="warning" circle></el-button> -->
            <span>{{item.desc}}</span>
            <div class="list-line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Video from "@/components/Video";
export default {
  name: "index",
  components: { Video, Header },
  data() {
    return {
      carouselData: [
        { img: require("@/assets/image/home/bg-one.png") },
        { img: require("@/assets/image/home/bg-two.png") },
        { img: require("@/assets/image/home/bg-three.png") },
      ],
      btnData: [
        { title: "课程专区" },
        { title: "习题专区" },
        { title: "图形化编程" },
        { title: "交流专区" },
      ],
      boxData: [
        {
          title: "圈圈大作战",
        },
        {
          title: "太空探险",
        },
        {
          title: "小猫捉虫子",
        },
        {
          title: "星空逐梦",
        },
        {
          title: "太空探险",
        },
        {
          title: "小猫捉虫子",
        },
        {
          title: "星空逐梦",
        },
      ],
      boxDatas: [],
      videoData: [
        {
          img: require("../assets/mp4/shipin.mp4"),
          title: "教学视频",
          head: require("@/assets/image/home/head-0.png"),
          name: "太难啦",
        },
        {
          img: require("../assets/mp4/shipin.mp4"),
          title: "教学视频",
          head: require("@/assets/image/home/head-0.png"),
          name: "太难啦",
        },
        {
          img: require("../assets/mp4/shipin.mp4"),
          title: "教学视频",
          head: require("@/assets/image/home/head-0.png"),
          name: "太难啦",
        },
      ],
      videoDatas: [],
      boxList: [
        { icon: 'el-icon-s-platform', desc: '6岁+ 图形化编程体系' },
        { icon: 'el-icon-video-play', desc: '9岁+ 视频教学、图形化编程' },
        { icon: 'el-icon-edit-outline', desc: '12岁+ 视频教学、练习题目、图形化编程' },
      ]
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
      for (let i = 0; i < this.videoData.length; ) {
        this.videoDatas.push(this.videoData.slice(i, (i += 4)));
      }
    },
    handleCode(data) {
      if (data === 0) {
        this.$router.push({ path: "/course" });
      } else if (data === 3) {
        this.$router.push({ path: "/codeMirror" });
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
      padding: 0 90px;
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
        .box-task {
          color: #acacac;
        }
      }
      .boxes{
        padding: 10px 0 40px 0;
        .box-list {
          margin-top: 10px;
          text-align: center;
          span {
            margin-left: 10px;
            font-size: 16px;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>