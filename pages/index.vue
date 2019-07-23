<template>
    <v-container xs10>
        <v-list>
            <Card v-for="(item,index) in list" :key="index"
                  :height="item.height"
                  :weight="item.weight"
                  :base_experience="item.base_experience"
                  :id="item.id"
                  :name="item.name"
                  :front_default="item.sprites.front_default"
                  :back_default="item.sprites.back_default"/>
        </v-list>
        <pagination></pagination>
    </v-container>
</template>

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
