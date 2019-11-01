<template>
  <div class="topic">
    <div class="left">
      <div class="title" v-html="topic.title" />
      <div class="info">
        <span>
          发布于&nbsp;{{ $moment(topic.create_at, "YYYY-MM-DD").startOf('day').fromNow() }}&nbsp;•&nbsp;
        </span>
        <span>
          作者：
          <router-link :to="{path: '/user' + topic.loginname}">
            {{ topic.loginname }}
          </router-link>
          &nbsp;•&nbsp;
        </span>
        <span>
          {{ topic.visit_count }}次浏览&nbsp;•&nbsp;
        </span>
      </div>
      <div class="content" v-html='topic.content' />
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>

import { getTopicById } from "@/utils/api"

export default {
  name: "Topic",
  data() {
    return {
      topic: {}
    }
  },
  methods: {
    fetchData(id) {
      getTopicById(id).then(res => {
        this.topic = {
          ...res.data.data,
          ...res.data.data.author
        }
      })
    }
  },
  created() {
    this.fetchData(this.$route.params.id)
  },
  components: {

  }
}
</script>