<template>
  <div class="new-account">
    <form @submit.prevent="createAccount">
      <label>
        Name
        <input type="text" v-model.trim="account.name">
      </label>
      <button>Save</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'new-account',
  computed: {
  },
  methods: {
    createAccount () {
      this.$db.account.create(this.account)
      .then((doc) => {
        console.log('DOC: ', doc)
      })
      .catch((err) => {
        console.log('ERROR: ', err)
      })
    }
  },
  data () {
    return {
      account: {}
    }
  }
}
</script>
