<template>
    <imagesComponent />
  
</template>

<script>

export default {
  name: 'PageIndex',
  components:{
    imagesComponent: () => import(/* webpackChunkName: "group-LogOut" */ "components/images")
  }
}
</script>
