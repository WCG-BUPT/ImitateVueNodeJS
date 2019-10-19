<template>
  <div class="header">
    <div class="info">
      <a href='https://cnodejs.org/'>
        <img :src='require("@/assets/image/condejs.svg")' alt="网站logo" />
      </a>
      <span @click="dialogVisible = true">关于</span>
    </div>
    <el-dialog
      title="关于项目"
      :visible.sync="dialogVisible"
      width="30%">
      <span>
        这个项目是仿照https://github.com/shuiRong/VueCnodeJS 编写的，是startfrost用于练习Vue基本用法的项目。
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #444444;
  .info {
    width: 1200px;
    height: 100%;
    margin: auto;
    a {
      width: 120px;
      height: 100%;
      display: block;
      img {
        padding-top: 10px;
      }
    }
  }
}

</style>