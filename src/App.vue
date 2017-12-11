<template>
  <div id="app">
    <aside>
      <Sidebar />
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/sidebar'
export default {
  name: 'app',

  components: { Sidebar },

  created () {
    console.log('STORE:', this.$store.state.user.name)
  }
}
</script>

<style type="scss">
#app {
  font-family: Tahoma;
}
</style>
