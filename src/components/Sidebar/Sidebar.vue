<template>
  <el-aside class="sidebar" :class="{ 'sidebar-hidden': this.$store.getters.sidebar.isShow }" width="auto">
    <el-scrollbar class="sidebar-scrollbar">
      <el-menu class="sidebar-nav"
               @open="handleOpen"
               @close="handleClose"
               text-color="#fff"
               active-text-color="#427ec0"
               router
               :collapse="isCollapse">
        <!--TODO: 从数组中获得导航菜单 并进行分级渲染-->
        <template v-for="(item, index) in navItems">
          <template v-if="item.group">
            <el-submenu :index="item.url">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{$t(item.name)}}</span>
              </template>
              <template v-for="(childL1, index) in item.children">
                <el-menu-item :index="childL1.url" :key="index">{{$t(childL1.name)}}</el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.url" :key="index">
              <i :class="item.icon"></i>
              <span slot="title">{{ $t(item.name) }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
    <el-radio-group class="sidebar-footer"
                    v-model="isCollapse"
                    :bihi-data="isCollapse"
                    @change="logoAndSidebarSmall">
      <el-radio-button :label="false" v-if="isCollapse"><i class="el-icon-arrow-right"></i></el-radio-button>
      <el-radio-button :label="true" v-else><i class="el-icon-arrow-left"></i></el-radio-button>
    </el-radio-group>
  </el-aside>
</template>

<script>
  import SidebarNavDivider from './SidebarNavDivider'

  export default {
    name: "sidebar",
    props: {
      navItems: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    components: {
      SidebarNavDivider
    },
    data() {
      return {
        isCollapse: this.$store.getters.sidebar.isFold
      };
    },
    created() {
      console.log(this.$store.getters.sidebar.isFold);
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      logoAndSidebarSmall(key) {
        // console.log(233);
        // console.log('是否折叠：' + key);
        this.$store.commit('sidebarFold', key);
        this.$store.commit('logoAndSidebarSmall', key);
        // console.log("11111:" + this.isCollapse);
        // console.log("22222:"+ this.$store.getters.sidebar.isFold);
      },
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/variables";

  .sidebar {
    display: flex;
    flex-direction: column;
    padding: 0;
    color: #fff;
    background: rgba(41, 54, 61, .5);
    transition: width .25s;

    z-index: 1019;
    height: calc(100vh - #{$header-height});

    &-hidden {
      margin-left: -200px
    }

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
      a {
        color: $white;
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
        input {
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

  .el-menu-item:focus, .el-menu-item:hover, .el-submenu__title:hover {
    background: rgba(41, 54, 61, .8);
  }

  .el-dropdown-menu__item--divided:before, .el-menu, .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background: inherit;
  }
</style>
