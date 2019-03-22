<template>
  <div id="app">

      <div id="main-wrapper">

          <header></header>

          <side-bar-main></side-bar-main>

          <div class="page-wrapper">

              <breadcrumbs></breadcrumbs>

              <div class="container-fluid">
                  <router-view/>
              </div>

              <footer></footer>
          </div>
      </div>
  </div>
</template>

<script>
import Header from './components/Header'
import SideBarMain from './components/Sidebar/Main'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'

export default {
    components: {
        Header,
        SideBarMain,
        Breadcrumbs,
        Footer,
    }
}
</script>

<style scoped>

</style>
