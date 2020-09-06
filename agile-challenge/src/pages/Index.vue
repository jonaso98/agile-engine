<template>
    <imagesComponent />
  
</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      leftDrawerOpen: ''
    }
  },
  components:{
    //loading the webpack images  
    imagesComponent: () => import(/* webpackChunkName: "group-images" */ "components/images")
  }
}
</script>
