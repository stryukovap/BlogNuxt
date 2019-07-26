<template>
  <v-app>
    <v-toolbar class="toolbar" color="green">
      <v-toolbar-title>My Pokemons</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-select class="toolbar__select"
                v-model="limit"
                :items="limitList"
      ></v-select>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar>
    <nuxt/>
  </v-app>
</template>

<script>
  import {mapActions, mapState} from 'vuex';

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState([
        'limitList'
      ]),
      limit: {
        get() {
          return this.$store.state.limit
        },
        set(value) {
          this.$store.dispatch('changeLimit', value)
        }
      }
    },
    methods: {
      ...mapActions([
        'getList'
      ])
    }
  }
</script>

