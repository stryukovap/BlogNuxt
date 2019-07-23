<template>
    <v-flex xs12>
        <v-card @click.prevent="goTo(id)">
            <v-layout>
                <v-flex xs4>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                              <v-img class="flip-card-img"
                                     :src="`${front_default}` || ''" alt="front_default"></v-img>
                            </div>
                            <div class="flip-card-back">
                              <v-img class="flip-card-img"
                                     :src="back_default?`${back_default}`:''" alt="back_default"></v-img>
                            </div>
                        </div>
                    </div>
                </v-flex>
                <v-flex xs8>
                    <div>
                        <v-card-title primary-title>
                            {{name}}
                        </v-card-title>
                        <div>
                            height {{height}}
                        </div>
                        <div>
                            weight {{weight}}
                        </div>
                        <div>
                            base_experience {{base_experience}}
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
    </v-flex>
</template>
<style scoped>
    .v-card:hover {
        cursor: pointer;
    }

    .flip-card-img {
        width: auto;
        height: 150px;
    }

    .flip-card {
        width: 150px;
        height: 150px;
        background-color: transparent;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
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
        background-color: transparent;
    }

    /* Style the back side */
    .flip-card-back {
        transform: rotateY(180deg);
    }
</style>
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
                this.$store.commit('currentPokemonId', id);
                this.$store.dispatch('getPokemonById');
                this.$router.push('/pokemon/' + id);
            }
        }
    }
</script>
