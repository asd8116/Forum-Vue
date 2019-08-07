<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard :user="user" :is-current-user="currentUser.id === user.id" :initial-is-followed="isFollowed" />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="followings" />
        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>

      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="comments" />
        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard :favorited-restaurants="favoritedRestaurants" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserProfileCard from '@/components/UserProfileCard'
import UserFollowingsCard from '@/components/UserFollowingsCard'
import UserFollowersCard from '@/components/UserFollowersCard'
import UserCommentsCard from '@/components/UserCommentsCard'
import UserFavoritedRestaurantsCard from '@/components/UserFavoritedRestaurantsCard'

import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

export default {
  data() {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: []
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({
          userId
        })

        const { profile, isFollowed } = data
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.user = {
          ...this.user,
          id: profile.id,
          image: profile.image,
          name: profile.name,
          email: profile.email,
          followingsLength: profile.Followings.length,
          followersLength: profile.Followers.length,
          commentsLength: profile.Comments.length,
          favoritedRestaurantsLength: profile.FavoritedRestaurants.length
        }
        this.isFollowed = isFollowed
        this.followings = profile.Followings
        this.followers = profile.Followers
        this.favoritedRestaurants = profile.FavoritedRestaurants
        // 處理 comment.Restaurant 可能有空值的情況
        this.comments = profile.Comments.filter(comment => comment.Restaurant)
      } catch (error) {
        // STEP 6: 錯誤處理
        Toast.fire({
          type: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  },
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  }
}
</script>