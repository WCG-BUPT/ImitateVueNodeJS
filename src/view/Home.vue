<template>
  <div class="home">
    <el-tabs v-model="tab" @tab-click="handleClick">
      <el-tab-pane label="全部" name="all">
        <topic-items :list='list' />
      </el-tab-pane>
      <el-tab-pane label="精华" name="good">
        <topic-items :list='list' />
      </el-tab-pane>
      <el-tab-pane label="分享" name="share">
        <topic-items :list='list' />
      </el-tab-pane>
      <el-tab-pane label="问答" name="ask">
        <topic-items :list='list' />
      </el-tab-pane>
      <el-tab-pane label="招聘" name="job">
        <topic-items :list='list' />
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>

import TopicItems from "@/components/TopicItems.vue"
import { getTopicItems } from "@/utils/api"

export default {

  name: "Home",
  
  data() {
    return {
      page: 1,
      limit: 20,
      tab: "all",
      list: []
    }
  },

  methods: {
    // to-do
    handleClick(tab, event) {
      console.log(tab, event)
    },
    // get topic item by axios
    getTopics() {
      getTopicItems({
        page: this.page,
        limit: this.limit,
        tab: this.tab
      }).then(res => {    //请求成功时的返回值赋给res
        this.list = res.data.data
        this.limit = this.limit + 10
      })
    },
    // get new topics when page is scrolled down
    scrollMethod() {
      const sumH = document.documentElement.scrollHeight
      const viewH = document.documentElement.clientHeight
      const scrollH = document.documentElement.scrollTop
      if (viewH + scrollH >= sumH) {
        this.getTopics();
      }
    }
  },

  created() {
    this.getTopics()
    window.addEventListener("scroll", this.scrollMethod);
  },

  components: {
    TopicItems
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: auto;
  width: 75%;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
