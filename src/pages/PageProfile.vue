<template>
  <div class="flex-grid">
    <div class="col-3 push-top">

      <UserProfileCard
        v-if="!edit"
        :user="user"
        :userPostsCount="userPostsCount"
        :userThreadsCount="userThreadsCount"
      />

      <UserProfileCardEditor
        v-else
        :user="user"
        :userPostsCount="userPostsCount"
        :userThreadsCount="userThreadsCount"
      />

      <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>

      <div class="text-center">
        <hr>
        <router-link
          :to="{name: 'ProfileEdit'}"
          class="btn-green btn-small"
        >
          Edit Profile
        </router-link>

      </div>

    </div>

    <div class="col-7 push-top">

      <div class="profile-header">
        <span class="text-lead">
            Joker's recent activity
        </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr>

      <PostList :posts="userPosts" />
    </div>
  </div>
</template>

<script>
  import PostList from '@/components/PostList'
  import { mapGetters } from 'vuex'
  import { countObjectProperties } from '@/utils'
  import UserProfileCard from '@/components/UserProfileCard'
  import UserProfileCardEditor from '@/components/UserProfileCardEditor'

  export default {
    name: 'PageProfile',
    components: {
      UserProfileCard,
      UserProfileCardEditor,
      PostList
    },
    props: {
      edit: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters({
        user: 'authUser'
      }),
      userThreadsCount () {
        return countObjectProperties(this.user.threads)
      },
      userPostsCount () {
        return countObjectProperties(this.user.posts)
      },
      userPosts () {
        if (this.user.posts) {
          return Object.values(this.$store.state.posts)
            .filter(post => post.userId === this.user['.key'])
        }
        return []
      }
    }
  }
</script>

