<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ status }}</p>

    <ul v-if="users">
      <li v-for="user in users">
        Name: {{ user.name }}
      </li>
    </ul>

    <button @click="load">Search users</button>
  </div>
</template>

<script>
export default {
  asyncData ({ store }) {
    // return the Promise from the action
    return store.dispatch('fetchUsers')
  },

  data () {
    return {
      msg: 'Users page!!!',
    }
  },

  methods : {
    load () {
      this.$store.dispatch('fetchUsers')
    },
  },

  computed: {
    status () {
      return this.$store.getters.status
    },

    users () {
      return this.$store.getters.allUsers
    },
  },
}
</script>
