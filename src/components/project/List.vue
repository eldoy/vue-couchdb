<template>
  <div class="project-list">
    Project list
  </div>
</template>

<script>
export default {
  name: 'Projects',

  created () {
    this.$db.connection.info((info) => {
      this.info = info
    })
  },

  data () {
    return {
      info: {}
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
