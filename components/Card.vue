<template>
  <li>
    <a href="#" @click.prevent="goTo(id)">
      <!--      {{id}} {{name}}-->
      <!--      {{height}} {{weight}} {{base_experience}} {{front_default}} {{back_default}}-->
    </a>
  </li>
</template>
<script>
  export default {
    name: 'card',
    props: {
      // name: String,
      // height: String,
      // weight: String,
      // base_experience: String,
      // id: String,
      // front_default: String,
      // back_default: String
    },
    methods: {
      goTo(id) {
        this.$router.push('/pokemon/' + id)
      }
    }
  }
</script>
