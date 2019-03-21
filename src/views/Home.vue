<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Component />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import Component from '@/components/catalog/Component'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Component
  }
}
</script>
