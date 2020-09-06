<template>
    <q-card class="my-card" @click="emitThis(data.row.id)"  >
        <q-card-section class="text-center">
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
        </q-card-section>
        <q-separator />
        <q-card-section class="flex flex-center" :style="{ fontSize: data.row.calories + 'px' }">
            <div>{{ data.row.calories }} g</div>
        </q-card-section>          
    </q-card>
</template>
<script>

export default {
    props:['data'],
    data () {
        return {
            slide:1,
            fullHeight: false
        }
    },
    methods:{
        emitThis(val){
            this.$emit('openCarrusel',val)
        }
    }
}
</script>

<style lang="sass">
.my-card
  width: 100%
  max-width: 300px
</style>