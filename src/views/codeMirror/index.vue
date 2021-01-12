<!--
 * @Author: wangmeng
 * @Date: 2021-01-06 11:38:40
 * @LastEditTime: 2021-01-12 11:24:40
 * @LastEditors: wangmeng
 * @Description: 图形化编程页
 * @FilePath: https://github.com/wangmeng456/bs-app-vue/blob/master/src/views/codeMirror/index.vue
-->
<template>
  <div class="code">
    <div class="left" id="left">
      <img id="zhuzhu" src="@/assets/image/profile.jpg" alt="暂无图片" />
    </div>
    <div class="right">
      <div class="nav">
        <el-row>
          <el-col :span="8">
            <ul>
              <li
                @click="handleTab(item.data)"
                v-for="(item, index) in tabData"
                :key="index"
                :class="activeTabIndex === index ? 'tab-active' : 'tab'"
              >
                {{ item.name }}
              </li>
            </ul>
          </el-col>
          <el-col :span="12">
            <div v-if="activeTabIndex === 0">
              <el-transfer
                v-model="checked"
                :data="transferData"
                :titles="['Source', 'Target']"
                @change="getObject"
              >
                <span slot-scope="{ option }"
                  >{{ option.label }}
                  <el-input v-model="option.input" name="input"></el-input>
                </span>
              </el-transfer>
              <!-- <div ref="element" class="box" v-drag draggable="false">
                向前移动
                <el-input name="input" v-model="font"></el-input>
                步
              </div> -->
            </div>
            <div v-if="activeTabIndex === 1">
              <!-- <div ref="element" class="box" v-drag draggable="false">
                说
                <el-input name="input" v-model="speak"></el-input>
              </div> -->
            </div>
            <div v-if="activeTabIndex === 2">
              <!-- <div ref="element" class="box" v-drag draggable="false">
                生成1-10的随机数
              </div> -->
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="main">
        <div>
          <el-button @click="handleBtn" type="text">运行</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "codeMirror",
  data() {
    return {
      tabData: [
        { name: "运动", data: 0 },
        { name: "事件", data: 1 },
        { name: "运算", data: 2 },
      ],
      activeTabIndex: 0,
      font: 0,
      speak: "",
      transferData: [
        { key: 0, label: "11111111111", disabled: false, input: 0 },
        { key: 1, label: "22222222222", disabled: false, input: 0 },
        { key: 2, label: "33333333333", disabled: false, input: 0 },
        { key: 3, label: "44444444444", disabled: false, input: 0 },
      ], //Transfer 的数据源
      checked: [], //穿梭框绑定的数据，选定到右侧框中的数据项的value组成的数组
    };
  },
  // directives: {
  //   drag(el) {
  //     let oDiv = el; // 当前元素
  //     let self = this; // 上下文
  //     // 禁止选择网页上的文字
  //     document.onselectstart = function () {
  //       return false;
  //     };
  //     oDiv.onmousedown = function (e) {
  //       // 鼠标按下，计算当前元素距离可视区的距离
  //       let disX = e.clientX - oDiv.offsetLeft;
  //       let disY = e.clientY - oDiv.offsetTop;
  //       // 有input输入框点击后不移动当前元素
  //       if(e.target.name == "input") return;
  //       document.onmousemove = function (e) {
  //         // 通过事件委托，计算移动的距离
  //         let l = e.clientX - disX;
  //         let t = e.clientY - disY;
  //         // 移动当前元素
  //         oDiv.style.left = l + "px";
  //         oDiv.style.top = t + "px";
  //       };
  //       document.onmouseup = function (e) {
  //         document.onmousemove = null;
  //         document.onmouseup = null;
  //       };
  //       // return false不加的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
  //       return false;
  //     };
  //   },
  // },
  created() {},
  methods: {
    handleTab(data) {
      this.activeTabIndex = data;
    },
    //右侧列表元素变化时触发
    getObject(value, direction, movedKeys) {
      const arr = [];
      for(let i = 0; i < value.length; i++) {
        arr.push({
          data: this.transferData[value[i]].label,
          len: this.transferData[value[i]].input
        })
      }
    },
    handleBtn() {
      let zhuzhu = document.getElementById("zhuzhu");
      let left = document.getElementById("left");
      zhuzhu.style.marginTop = this.font+'px';
      let div = document.createElement('div');
      div.style.fontSize = '30px';
      let textnode = document.createTextNode(this.speak);
      div.appendChild(textnode);
      left.appendChild(div);
    }
  },
};
</script>
<style lang="scss">
.code {
  display: flex;
  justify-content: space-between;
  .left {
    width: 40%;
    padding: 40px;
    img {
      width: 200px;
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: 40px;
    .nav {
      width: 40%;
      border: 1px solid #000;
      position: relative;
      ul {
        cursor: pointer;
        li {
          line-height: 30px;
        }
        .tab {
          &-active {
            color: #ff7722;
          }
        }
      }
      .el-input {
        width: 34px;
      }
      .el-input__inner {
        padding: 0 4px;
      }
      .box {
        width: 300px;
        height: 80px;
        cursor: pointer;
        position: absolute;
        top: 40px;
      }
    }
    .main {
      width: 60%;
      border: 1px solid #000;
    }
  }
}
</style>