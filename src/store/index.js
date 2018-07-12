import Vue from 'vue'
import Vuex from 'vuex'
import sourceDate from '@/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sourceDate,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },
  getters: {
    authUser (state) {
      return state.users[state.authId]
    }
  },
  actions: {
    createPost ({commit}, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId
      commit('setPost', {post, postId})
      commit('appendPostToThread', {postId, threadId: post.threadId})
      commit('appendPostToUser', {userId: post.userId, postId})
    },
    updateUser ({commit}, user) {
      commit('setUser', {user, userId: user['.key']})
    }
  },
  mutations: {
    setPost (state, {post, postId}) {
      Vue.set(state.posts, postId, post)
    },
    setUser (state, {user, userId}) {
      Vue.set(state.users, userId, user)
    },
    appendPostToThread (state, {postId, threadId}) {
      const thread = state.threads[threadId]
      Vue.set(thread.posts, postId, postId)
    },
    appendPostToUser (state, {userId, postId}) {
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    }
  }

})
