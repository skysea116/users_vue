<template>
  <div class="search">
    <searchList />
  </div>
</template>


<script>
import searchList from '@/components/searchList.vue'

export default {
  name: 'SearchView',
  components: {
    searchList
  }
}
</script>
