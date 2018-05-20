<template>
  <el-header class="app-header" height="55px">
    <router-link to="/" class="logo">LOGO</router-link>
    <section>

      <!--<div @click="setLang('en')" v-if="language==='zh'">EN</div>-->
      <!--<div @click="setLang('zh')" v-else>中文</div>-->

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
        <img src="../assets/icons/用户.svg" alt="">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{$t('setting')}}</el-dropdown-item>
          <el-dropdown-item>{{$t('logout')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </section>
  </el-header>
</template>
<script>
  import API from '../api'

  export default {
    name: 'Header',
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
      width: 50px;
    }
  }
</style>
