<template>
  <div>
    <Navigation />
    <main> 
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation/NavigationItems/NavigationItems';
export default {
  name: "Layout",
  components: {
    Navigation
  },
  mounted() {
  console.log("aaaa")
  }
}

</script>