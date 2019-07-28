<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex class="toggleListToBlocks" v-for="(item,index) in list" :key="index" xs12>
        <Card :height="item.height"
              :weight="item.weight"
              :base_experience="item.base_experience"
              :id="item.id"
              :name="item.name"
              :front_default="item.sprites.front_default"
              :back_default="item.sprites.back_default"/>
      </v-flex>
    </v-layout>
    <pagination></pagination>
  </v-container>
</template>
<style>
  .toggleListToBlocks {

  }
</style>

<script>


  import Card from "../components/Card";
  import Pagination from "../components/Pagination";
  import {mapActions, mapState} from 'vuex';

  export default {
    components: {
      Pagination,
      Card
    },
    data() {
      return {}
    },
    async fetch({store, params}) {
      // console.log('fetch');
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
