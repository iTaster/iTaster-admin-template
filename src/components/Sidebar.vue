<template>
  <el-aside class="sidebar" width="auto">
    <el-scrollbar class="sidebar-scrollbar">
      <el-menu class="sidebar-nav" @open="handleOpen" @close="handleClose"
               text-color="#fff"
               active-text-color="#20a8d8" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
    <el-radio-group class="sidebar-footer" v-model="isCollapse">
      <el-radio-button :label="false" v-if="isCollapse"><i class="el-icon-arrow-right"></i></el-radio-button>
      <el-radio-button :label="true" v-else><i class="el-icon-arrow-left"></i></el-radio-button>
    </el-radio-group>
  </el-aside>
</template>

<script>

  export default {
    name: "sidebar",
    data() {
      return {
        isCollapse: true
      };
    },
    computed: {
      sidebar() {
        return this.$store.getters.sidebar;
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .sidebar {
    display: flex;
    flex-direction: column;
    padding: 0;
    color: #fff;
    background: rgba(41, 54, 61,.5);
    transition: width .25s;

    z-index: 1019;
    height: calc(100vh - #{$header-height});

    &-scrollbar {
      .el-scrollbar__view {
        height: calc(100vh - #{$header-height + $sidebar-footer-height});
      }
    }

    &-nav {
      position: relative;
      flex: 1;
      border: none;
      background: transparent;
      overflow: hidden;
      &:not(.el-menu--collapse) {
        width: $sidebar-width;
      }
    }

    &-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 0 0 50px;
      background: rgba(0, 0, 0, .3);
      label {
        width: 100%;
        height: $sidebar-footer-height;
        &:focus:not(.is-focus):not(:active) {
          box-shadow: none;
        }
        input{
          display: none;
        }
        span {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: inherit;
          height: inherit;
          background: transparent;
          border: 0 !important;
          border-radius: 0 !important;
        }
        i {
          border-left: none;
          color: #73818f;
          font-size: 1.5rem;
        }
      }
      &:hover {
        background: rgba(0, 0, 0, .4);
        i {
          color: $white;
          transition: .3s;
        }
      }

    }
  }

  .el-radio-button__inner:hover {
    color: inherit;
  }
  .el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover{
    background: rgba(41, 54, 61,.8);
  }
  .el-dropdown-menu__item--divided:before, .el-menu, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background: inherit;
  }
</style>

<style scoped lang="scss">

</style>
