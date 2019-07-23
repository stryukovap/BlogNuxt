<template>
    <v-container xs10>
        <h1>
            {{$route.params.id}}
        </h1>
        <Card :height="currentPokemon.height"
              :weight="currentPokemon.weight"
              :base_experience="currentPokemon.base_experience"
              :id="currentPokemon.id"
              :name="currentPokemon.name"
              :front_default="currentPokemon.sprites.front_default"
              :back_default="currentPokemon.sprites.back_default">
        </Card>
        <div>
            <p>Stats</p>
            <ul>
                <li v-for="item in currentPokemon.stats">
                    {{item.stat.name}} = {{item.base_stat}}
                </li>
            </ul>
            <p>Types</p>
            <ul>
                <li v-for="item in currentPokemon.types">
                    {{item.type.name}}
                </li>
            </ul>
            <p>Forms</p>
            <ul>
                <li v-for="item in currentPokemon.forms">
                    {{item.name}}
                </li>
            </ul>
            <!--            {{currentPokemon.species}}-->
            <!--            {{currentPokemon.abilities}}-->
            <!--            {{currentPokemon.held_items}}-->
            <!--            {{currentPokemon.location_area_encounters}}-->
        </div>
    </v-container>
</template>
<script>
    import {mapState} from "vuex";
    import Card from "../../components/Card";

    export default {
        validate({params}) {
            return !!params.id
        },
        components: {
            Card
        },
        computed: {
            ...mapState([
                'currentPokemon'
            ])
        }
    }
</script>
