<template>
  <el-header class="app-header" height="$header-height">
    <router-link to="/" class="logo"></router-link>
    <nav class="app-header-nav">
      <!--<div @click="setLang('en')" v-if="language==='zh'">EN</div>-->
      <!--<div @click="setLang('zh')" v-else>中文</div>-->
      <ScreenFull class="el-dropdown"/>
      <el-dropdown>
        <img src="../assets/icons/地球.svg" alt="">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <div @click="setLang('en')">English</div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div @click="setLang('zh')">简体中文</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <img src="../assets/img/avatar.png" height="40" width="40"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{$t('setting')}}</el-dropdown-item>
          <el-dropdown-item>{{$t('logout')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </nav>
  </el-header>
</template>
<script>
  import API from '../api'
  import ScreenFull from '../components/ScreenFull'

  export default {
    name: 'Header',
    components: {
      ScreenFull
    },
    data: function () {
      return {
        username: null,
      }
    },
    created() {
      let self = this
      /*      self.$http.get(API.get_login_info, null, r => {
              console.log(r)
              console.log(r.msg)
              r.status==1? self.username=r.userInfo.username:self.username='Avatar'
            })*/
    },
    computed: {
      language() {
        return this.$store.getters.language;
      }
    },
    methods: {
      setLang(lang) {
        // console.log(lang);
        this.$i18n.locale = lang;
        this.$store.commit('setLanguage', lang)
      },
      logout() {
        let self = this
        self.$http.get(API.logout, null, r => {
          if (r.status == 1) {
            localStorage.clear();
            window.location.href = '/login.html'
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/scss/variables";

  .logo {
    display: inline-block;
    width: 200px;
    height: $header-height;
    margin-right: 0;
    background: url(../assets/logo.png) no-repeat 50% / auto 50px;
  }

  .app-header {
    position: fixed;
    top: 0;
    padding: 0;
    margin: 0;
    display: flex;
    flex: 0 0 $header-height;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 1020;
    background: $header-bg;
    background: $header-linear-gradient;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $gray-100;
      font-size: 1rem;
    }
    li {
      padding: 0 2em;
    }
    .el-dropdown {
      width: 4rem;
    }
    &-nav{
      display: flex;
      align-items: center;
    }
  }
</style>
