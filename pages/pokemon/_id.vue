<template>
  <h1>
    {{$route.params.id}}
  </h1>
</template>
<script>
  export default {
    validate({params}) {
      return !!params.id
    }
  }
</script>
