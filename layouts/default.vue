<template>
  <v-app>
    <v-toolbar class="toolbar" color="green" :flat="true">
      <v-toolbar-title>My Pokemons</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-select class="toolbar__select"
                v-model="limit"
                :items="limitList"
      ></v-select>
      <v-spacer></v-spacer>
      <v-icon v-show="listLayout" @click="toggleLayout">fas fa-list</v-icon>
      <v-icon v-show="!listLayout" @click="toggleLayout">fas fa-th-large</v-icon>
      <v-spacer></v-spacer>
      <v-icon @click="goBack">fas fa-arrow-left</v-icon>
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
          this.$store.dispatch('changeLimit', value);
        }
      }
    },
    methods: {
      ...mapActions([
        'getList'
      ]),
      toggleLayout() {
        this.listLayout = !this.listLayout;
        const elList = document.querySelectorAll('.toggleListToBlocks');
        elList.forEach(el => {
          el.classList.toggle('xs12');
          el.classList.toggle('xs6');
        });
        const cardList = document.querySelectorAll('.card__wrapper');
        cardList.forEach(el => {
          el.classList.toggle('row');
          el.classList.toggle('column');
        });
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

