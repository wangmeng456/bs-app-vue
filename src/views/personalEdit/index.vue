<!--
 * @Author: wangmeng
 * @Description: 修改个人信息页
-->
<template>
  <div>
    <Header />
    <div class="edit">
      <div class="top">
        <div class="img">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <br />
          <span>(头像文件格式：png、jpg 最佳像素：100x100；最大：2MB)</span>
        </div>
        <div class="user">
          <el-form ref="form" :model="form" label-width="60px">
            <el-form-item label="账号：">
              <el-input v-model="form.name" disabled></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="content">
        <el-form ref="form" :model="forms" label-width="60px">
          <el-form-item label="昵称：">
            <el-input v-model="forms.name" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="forms.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生日：">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="forms.date"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="年级：">
            <el-select
              v-model="forms.grade"
              placeholder="请选择年级"
              style="width: 100%"
            >
              <el-option
                v-for="item in forms.options"
                :label="item.name"
                :value="item.value"
                :key="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简介：">
            <el-input type="textarea" v-model="forms.desc"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="bottom">
        <el-button type="warning" @click="backNow">确认修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "personalEdit",
  components: { Header },
  data() {
    return {
      imageUrl: require("@/assets/image/profile.jpg"),
      form: {
        name: "bs001",
      },
      forms: {
        name: "wangmeng",
        sex: "女",
        date: "2021-01-01",
        grade: "六年级",
        options: [
          { name: "一年级", value: "001" },
          { name: "二年级", value: "002" },
          { name: "三年级", value: "003" },
          { name: "四年级", value: "004" },
          { name: "五年级", value: "005" },
          { name: "六年级", value: "006" },
          { name: "七年级", value: "007" },
          { name: "八年级", value: "008" },
          { name: "九年级", value: "009" },
        ],
        desc: "我爱编程！！！",
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg || image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG或PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    backNow() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.edit {
  width: 1000px;
  margin: 70px auto;
  background: #fff;
  padding: 40px;
  .el-form {
    width: 500px;
    margin-top: 30px;
  }
  .top {
    .img {
      text-align: center;
      img {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        border: 2px solid #000;
      }
      .avatar-uploader .el-upload {
        border: 2px solid #000;
        border-radius: 100px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
      }
      span {
        color: gray;
      }
    }
  }
  .content {
    margin-top: 10px;
    border: 1px dotted #888;
    padding: 0 10px;
  }
  .bottom {
    text-align: center;
    margin-top: 20px;
    .el-button {
      width: 200px;
      height: 40px;
    }
  }
}
</style>