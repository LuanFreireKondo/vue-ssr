<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style src="../styleguide/reset.scss" lang="scss"></style>

<script>
const Header = () => import('../components/header/header.vue')

export default {
  components: {
    Header,
  }
}
</script>
