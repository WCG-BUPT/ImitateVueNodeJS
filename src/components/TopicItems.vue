<template>
  <div>
    <div class="topic" v-for="item in list" :key="item.id">
      <a>
        <img :src="item.author.avatar_url" alt="用户头像" />
      </a>
      <span class="count">
        {{ item.reply_count }} / {{ item.visit_count }}
      </span>
      <a class="title">
        {{ item.title }}
      </a>
      <span class="time">
        // to-do
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicItem",
  props: ["list"],
  data() {
    return {
      article: []
    };
  }
};
</script>

<style lang='scss' scoped>
.topic {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .title {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
