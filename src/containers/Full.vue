<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <AppSidebar/>
      <el-main class="app-main">
        <breadcrumb :list="list"/>
        <div>
          <router-view></router-view>
        </div>
      </el-main>>
    </div>
    <Theme/>
  </div>
</template>

<script>
  import nav from '../_nav'
  import {
    Theme,
    Header as AppHeader,
    Sidebar as AppSidebar,
    Aside as AppAside,
    Footer as AppFooter,
    Breadcrumb
  } from '../components/'

  export default {
    name: "Full",
    components: {
      Theme,
      AppHeader,
      AppSidebar,
      AppAside,
      AppFooter,
      Breadcrumb
    },
    data() {
      return {
        nav: nav.items
      }
    },
    computed: {
      name() {

      },
      list() {

      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/scss/variables";

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    &-body {
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      overflow-x: hidden;
      margin-top: $header-height;
    }
    &-main{
      color: $white;
    }
  }
</style>
