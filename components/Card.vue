<template>
  <v-card class="card" :flat="true" @click.prevent="goTo(id)">
    <v-layout :class="`${layout.cardList}`" align-center justify-space-around fill-height>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <v-img class="flip-card-img"
                   :src="`${front_default}` || ''"
                   alt="front_default"></v-img>
          </div>
          <div class="flip-card-back">
            <v-img class="flip-card-img"
                   :src="`${back_default}` || ''"
                   alt="back_default"></v-img>
          </div>
        </div>
      </div>
      <div>
        <v-card-title class="capitalize" primary-title is="h2">
          {{name}}
        </v-card-title>
        <ul class="capitalize">
          <li>height: {{height}}</li>
          <li>weight: {{weight}}</li>
          <li>base_experience: {{base_experience}}</li>
        </ul>
      </div>
    </v-layout>
  </v-card>
</template>
<script>
  import {mapState} from "vuex";

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
    computed: {
      ...mapState([
        'layout',
      ])
    },
    methods: {
      goTo(id) {
        this.$store.commit('currentPokemonId', id);
        this.$router.push('/pokemon/' + id);
      }
    }
  }
</script>
<style scoped>
  .capitalize {
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  .card {
    margin: 10px 0;
  }

  .card:hover {
    cursor: pointer;
  }

  .flip-card-img {
    width: auto;
    height: 150px;
  }

  .flip-card {
    margin: 15px;
    width: 150px;
    height: 150px;
    /*background-color: transparent;*/
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    /*transition: transform 0.8s;*/
    transition: all 1s ease-in-out;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: white;
  }

  /* Style the back side */
  .flip-card-back {
    background-color: white;
    transform: rotateY(180deg);
  }
</style>

