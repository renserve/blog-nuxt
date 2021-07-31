<template>
  <ul class="recommend-container">
    <li class="recommend-item" v-for="article in articles" :key="article.id">
      <time class="time" :datetime="article.create_time | filterTime('Y-m-d')">{{article.create_time | filterTime('Y-m-d')}}</time>
      <span class="title" @click="$emit('showRecommendDetail', article.id)">{{article.title}}
        <span class="hover-dot"></span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.recommend-container {
  @media (max-width: 480px) {
    padding-left: 2em;
  }
}
.recommend-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 6px 0;
  font-size: 1rem;

  .time {
    margin-right: 20px;
    font-size: $font-size-medium;
  }

  .title {
    cursor: pointer;
    position: relative;
    &:hover .hover-dot {
      background-color: var(--theme-active);
    }

    .hover-dot {
      position: absolute;
      right: -10px;
      top: 0;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      transition: all 0.25s ease;
    }
  }

  @media (max-width: 1024px) {
    .time {
      margin-right: 16px;
      font-size: $font-size-base;
    }

    .title {
      font-size: $font-size-medium;
    }
  }

  @media (max-width: 480px) {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 9px;
      left: -18px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--font-color-primary);
    }

    .time {
      display: none;
    }

    .title {
      font-size: $font-size-base;
    }
  }
}
</style>
