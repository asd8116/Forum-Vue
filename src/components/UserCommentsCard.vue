<template>
  <div class="card mb-3">
    <div class="card-header">
      <strong>{{ comments.length }}</strong> 間已評論餐廳
    </div>

    <div class="card-body">
      <router-link v-for="comment in comments" :key="comment.id" :to="{name: 'restaurant', params: { id: comment.id }}">
        <img :src="comment.image | emptyImage" width="60" height="60" class="mr-1 mb-1" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '@/utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  }
}
</script>