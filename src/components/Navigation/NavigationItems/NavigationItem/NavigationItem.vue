<template>
  <router-link :tag="tag" :to="item.to">
    {{item.title}}
  </router-link>
</template>

<script>
export default {
  name: "NavigationItem",
  props: {
    item: {
      type: Object,
      default: null
    },
    tag: {
      type: String,
      default: 'li'
    },
   
  }

}
</script>
