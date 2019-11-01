<template>
  <div>
    <div class="topic" v-for="item in list" :key="item.id">
      <a>
        <img :src="item.author.avatar_url" alt="用户头像" />
      </a>
      <span class="count">
        <em>{{ item.reply_count }}</em> / <em>{{ item.visit_count }}</em>
      </span>
      <a class="title">
        {{ item.title }}
      </a>
      <span class="time">
        {{ $moment(item.last_reply_at, 'YYYY-MM-DD').fromNow() }}
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
  span.count {
    width: 50px;
    height: 26px;
    text-align: center;
    em:first-child {
      font-size: 1.2em;
      color: purple;
    }
    em:last-child {
      color: grey;
    }
  }
  .title {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
  span.time {
    width: 70px;
    text-align: right;
  }
}
</style>
