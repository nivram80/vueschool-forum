<template>
  <div>
    <FormListItem
      v-for="forum in forums"
      :key="forum['.key']"
      :forum="forum"
    />
  </div>
</template>

<script>
  import FormListItem from '@/components/FormListItem'

  export default {
    name: 'ForumList',
    components: {
      FormListItem
    },
    props: {
      forums: {
        required: true,
        type: Array
      }
    }
  }
</script>

