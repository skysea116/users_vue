<template>
  <div class="home">
    <usersList/>
  </div>
</template>

<script>
// @ is an alias to /src
import usersList from '@/components/usersList.vue'

export default {
  name: 'ListView',
  components: {
    usersList
  }
}
</script>
