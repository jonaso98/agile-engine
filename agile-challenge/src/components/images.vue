<template>

<div class="q-pa-md">
    <Mytabla />
    <!-- <q-table
      grid
      :card-container-class="cardContainerClass"
      title="Images"
      :data="datas"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      :pagination.sync="pagination"
      :rows-per-page-options="rowsPerPageOptions"

    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
             <q-card class="my-card" @click="emitThis(props.row.id)"  >
                <q-card-section class="text-center">
                    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
                </q-card-section>
                <q-separator />
                <q-card-section class="flex flex-center" :style="{ fontSize: props.row.id + 'px' }">
                    <div>{{ props.row.id }} g</div>
                </q-card-section>          
            </q-card>
            <myCard :datas="props"  v-on:openCarrusel="OpenModal" />        
        </div>
    </template>
    </q-table>
    -->
     
    
  </div>  
</template>
<script>
import { SessionStorage } from 'quasar'
import { mapActions, mapState } from 'vuex' 

const deserts = [
  'Frozen Yogurt',
  'Ice cream sandwich',
  'Eclair',
  'Cupcake',
  'Gingerbread',
  'Jelly bean',
  'Lollipop',
  'Honeycomb',
  'Donut',
  'KitKat'
]

export default {
    data () {
        return {
        filter: '',
        slide: 1,
        fullHeight: false,
        fullscreen: false,
        pagination: {
            page: 1,
            rowsPerPage: this.getItemsPerPage()
        },
        columns: [
            { name: 'id', label: 'Name', field: 'id' },
            { name: 'cropped_picture', label: 'Calories (g)', field: 'cropped_picture' }
        ],
            datos: []
        }
    },
    components: {
        myCard : () => import(/* webpackChunkName: "group-cards" */ "components/cards"),
        Mytabla : () => import(/* webpackChunkName: "group-table" */ "components/table")
    },
    computed: {
        ...mapState('imagesStorage',['userDetails','images']),
        cardContainerClass () {
        if (this.$q.screen.gt.xs) {
            return 'grid-masonry grid-masonry--' + (this.$q.screen.gt.sm ? '3' : '2')
        }
        return void 0
        },

        datas:{
            get(){
                this.pagination.page = this.images.page
                this.datos = this.images.pictures 
                return this.datos
            },
            set(val){
                this.datos = val
            }
        },
        pageCount(){
            return this.images.pageCount
        },
        rowsPerPageOptions () {
        if (this.$q.screen.gt.xs) {
            return this.$q.screen.gt.sm ? [ 1, 3, 6 ] : [ 1, 3 ]
        }

        return [ 3 ]
        }
    },

    watch: {
        '$q.screen.name' () {
        this.pagination.rowsPerPage = this.getItemsPerPage()
        }
    },
    mounted(){

        console.log("images", sessionStorage.getItem('imagesStorage'))
    },

    methods: {
        ...mapActions('imagesStorage', ['getImages']),
        
        getItemsPerPage () {
        const { screen } = this.$q
        if (screen.lt.sm) {
            return this.pageCount/4
        }
        if (screen.lt.md) {
            return this.pageCount/2
        }
            return this.pageCount
        }       
    }
}
</script>

<style lang="sass">
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

.my-card
  width: 100%
  max-width: 300px
  
.grid-masonry
  flex-direction: column
  height: 700px

  &--2
    > div
      &:nth-child(2n + 1)
        order: 1
      &:nth-child(2n)
        order: 2

    &:before
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3
    > div
      &:nth-child(3n + 1)
        order: 1
      &:nth-child(3n + 2)
        order: 2
      &:nth-child(3n)
        order: 3

    &:before,
    &:after
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 2
</style>