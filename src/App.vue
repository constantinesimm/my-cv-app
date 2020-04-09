<template>
  <div id="app">
    <div class="header d-print-none">
      <PageHeader/>
    </div>
    <d-container fluid>
      <d-row>
        <d-col>
          <router-view/>
        </d-col>
      </d-row>
    </d-container>
  </div>
</template>

<script>
  import PageHeader from './components/partial/PageHeader';
  export default {
    name: 'App',
    components: {
      PageHeader
    }
  }
</script>

<style>
  #app {
    height: 99vh;
    width: 98vw;
    margin: auto;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .header {
    height: 68px;
  }
</style>
