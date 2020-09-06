<template>
<div class="q-pa-md">
    <q-table
      grid
      :card-container-class="cardContainerClass"
      title="Images"
      :data="data"
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
            <myCard :data="props"  v-on:openCarrusel="OpenModal" />        
        </div>
        
      </template>
    </q-table>
      <q-dialog    
        v-model="fullHeight"
        full-width
        >
        <q-carousel
            animated
            v-model="slide"
            swipeable
            ref="carousel"
            transition-prev="slide-right"
            transition-next="slide-left"
        
         :fullscreen.sync="fullscreen"
        >
        <q-carousel-slide 
            v-for="(dat, index) in data" 
            :key="index" 
            :name="dat.id" 
            img-src="https://cdn.quasar.dev/img/mountains.jpg" 
        >
            <div class="absolute-bottom custom-caption">
            <div class="text-h2">{{ dat.name}}</div>
            <div class="text-subtitle1">{{ dat.name}}</div>
            <div class="text-subtitle1">{{ dat.name}}</div>
            </div>
        </q-carousel-slide>
         <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            class="q-pa-sm"
            push round color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
           <q-btn
            class="q-pa-sm"
            push round color="orange" text-color="black" icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
           class="q-pa-sm"
            push round color="orange" text-color="black" icon="arrow_right"
            @click="$refs.carousel.next()"
          />

           <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
                
                <ShareNetwork
                        network="facebook"
                        url=""
                        title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                        description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                        quote="The hot reload is so fast it\'s near instant. - Evan You"
                        hashtags="vuejs,vite"
                    >
                    <q-fab-action color="primary"  icon="facebook" />
                </ShareNetwork>                
            </q-fab>
        

        </q-carousel-control>
      </template>
        </q-carousel>
    </q-dialog>
  </div>  
</template>
<script>
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
const data = []

deserts.forEach(name => {
  for (let i = 1; i < 24; i++) {
    data.push({ id: i, name: name + ' (' + i + ')', calories: 20 + Math.ceil(50 * Math.random()) })
  }
})

data.sort(() => (-1 + Math.floor(3 * Math.random())))

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
        { name: 'name', label: 'Name', field: 'name' },
        { name: 'calories', label: 'Calories (g)', field: 'calories' }
      ],
      data
    }
  },
   components: {
       myCard : () => import(/* webpackChunkName: "group-cards" */ "components/cards")
   },
  computed: {
    cardContainerClass () {
      if (this.$q.screen.gt.xs) {
        return 'grid-masonry grid-masonry--' + (this.$q.screen.gt.sm ? '3' : '2')
      }

      return void 0
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
    console.log("Data",data)
  },

  methods: {
    getItemsPerPage () {
      const { screen } = this.$q
      if (screen.lt.sm) {
        return 1
      }
      if (screen.lt.md) {
        return 3
      }
      return 6
    },
    OpenModal(e){
        console.log("el valor es ", e)
        this.slide = e
        this.fullHeight = true
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