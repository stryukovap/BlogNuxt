<template>
  <li>
    <a href="#" @click.prevent="goTo(id)">
      {{id}} {{name}}
      {{height}} {{weight}} {{base_experience}} {{front_default}} {{back_default}}
      <img :src="front_default" alt="front_default">
      <img :src="back_default" alt="back_default">
    </a>
  </li>
</template>
<script>
  export default {
    name: 'card',
    props: {
      name: String,
      height: Number,
      weight: Number,
      base_experience: Number,
      id: Number,
      front_default: String,
      back_default: String
    },
    methods: {
      goTo(id) {
        this.$router.push('/pokemon/' + id)
      }
    }
  }
</script>
