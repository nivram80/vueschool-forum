<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea
        class="form-input"
        cols="30"
        rows="10"
        v-model="text"
      ></textarea>
    </div>
    <button class="btn-blue">Submit post</button>
  </form>
</template>
<script>
  export default {
    name: 'PostEditor',
    props: {
      threadId: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        text: ''
      }
    },
    methods: {
      save () {
        const postId = 'greatPost' + Math.random()
        const post = {
          text: this.text,
          publishedAt: Math.floor(Date.now() / 1000),
          threadId: this.threadId,
          userId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2',
          '.key': postId
        }

        this.text = ''
        this.$emit('save', { post })
      }
    }
  }
</script>
