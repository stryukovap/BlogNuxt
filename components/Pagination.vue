<template>
    <div class="text-xs-center">
        <v-pagination
                v-model="currentPage"
                :length="length"
        ></v-pagination>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Pagination",
        computed: {
            ...mapState([]),
            length: {
                get() {
                    return this.$store.state.length
                },
                set() {
                    this.$store.dispatch('mathLengthPagination')
                }
            },
            currentPage: {
                get() {
                    return this.$store.state.currentPage
                },
                set(value) {
                    this.$store.dispatch('changeCurrentPage', value);
                }
            }
        }
    }
</script>

<style scoped>

</style>