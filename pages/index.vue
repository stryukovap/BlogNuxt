<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex :class="`${layout.listLayout}`" v-for="(item,index) in list" :key="index">
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

<script>


  import Card from "../components/Card";
  import Pagination from "../components/Pagination";
  import {mapState} from 'vuex';

  export default {
    components: {
      Pagination,
      Card
    },
    data() {
      return {}
    },
    async fetch({store, params}) {
      await store.dispatch('getList', {root: true});
    },
    computed:
      mapState([
        'list', 'layout'
      ])
  }
</script>
