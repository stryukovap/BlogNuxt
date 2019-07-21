<template>
  <div>
    <ul>
      <!--      <Card v-for="(item,index) in list" :key="index"/>-->
      <Card v-for="(item,index) in list" :key="index"
            :height="item.height"
            :weight="item.weight"
            :base_experience="item.base_experience"
            :id="item.id"
            :name="item.name"
            :front_default="item.sprites.front_default"
            :back_default="item.sprites.back_default"/>
    </ul>
  </div>
</template>

<script>


  import Card from "../components/Card";
  import {mapActions, mapState} from 'vuex';

  export default {
    components: {Card},
    data() {
      return {}
    },
    async fetch({store, params}) {
      console.log('fetch');
      await store.dispatch('getList', {root: true});
    },
    computed:
      mapState([
        'list'
      ])
    ,
    methods: {
      ...mapActions([
        'getList'
      ])
    }

  }
</script>
