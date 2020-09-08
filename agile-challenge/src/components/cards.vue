<template>
    <q-card class="my-card" @click="emitThis(datoshere.row.id)"  >
        <q-card-section class="text-center">
            <q-img :src="datoshere.row.cropped_picture"  />
        </q-card-section>
        <q-separator />       

    </q-card>
</template>
<script>

export default {
    props:['datoshere'],
    data () {
        return {
            slide:1,
            fullHeight: false
        }
    },
    mounted(){
        console.log(" entro mounted ",this.datoshere)
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