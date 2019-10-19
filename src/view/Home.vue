<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">全部</el-tab-pane>
      <el-tab-pane label="精华" name="second">精华</el-tab-pane>
      <el-tab-pane label="分享" name="third">分享</el-tab-pane>
      <el-tab-pane label="问答" name="fourth">问答</el-tab-pane>
      <el-tab-pane label="招聘" name="招聘">招聘2333</el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activeName: "first"
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>

</style>