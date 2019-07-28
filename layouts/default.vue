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
      <v-icon v-show="listLayout" @click="toggleLayout">fas fa-list</v-icon>
      <v-icon v-show="!listLayout" @click="toggleLayout">fas fa-th-large</v-icon>
    </v-toolbar>
    <nuxt/>
  </v-app>
</template>

<script>
  import {mapActions, mapState} from 'vuex';

  export default {
    data() {
      return {
        listLayout: true
      }
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
      ]),
      toggleLayout() {
        this.listLayout = !this.listLayout
      }
    }
  }
</script>

