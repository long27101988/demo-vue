<template>
  <ul>
    <NavigationItem 
      v-for="(navigation, index) in navigations"
      :key="'key'+index"
      :index="index"
      :item="navigation"
      tag="li"
    ></NavigationItem>
  </ul>
</template>

<script>
import NavigationItem from './NavigationItem/NavigationItem';
export default {
  name: "NavigationItems",
  components: {
    NavigationItem
  },
  data: () => {
    return {
      navigations: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Profile",
          to: '/profile'
        }
      ]
    }
  }
  
}
</script>

