<template>
  <header class="admin-header">
    <button type="button" @click="toggleNav">
      <span class="icon">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </span>
    </button>

    <nav>
      <ul>
        <li :class="{'active': $route.name == 'admin'}">
          <router-link to="/admin">
            Home
          </router-link>
        </li>
        <li :class="{'active': $route.name == 'products'}">
          <router-link to="/admin/products">
            Products
          </router-link>
        </li >
        <li :class="{'active': $route.name == 'categories'}">
          <router-link to="/admin/categories">
            Categories
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    navVisibility() {
      return this.$store.state.admin.navVisibility;
    },
  },
  methods: {
    toggleNav() {
      this.$store.commit("updateNavVisibility", !this.navVisibility);
    },
  },
};
</script>

<style lang="scss" scoped>
$adminHeaderWidth: 200px;
#admin-content-body
{
  transition: padding-left 0.5s;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;
  /*&.nav-opened{
    padding-left: $adminHeaderWidth + 20px;
  }*/

}

button {
  width: 40px;
  height: 40px;
  left: 100%;
  background-color: #333;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  .icon {
    position: relative;
    display: block;
    width: 100%;

    .line {
      position: absolute;
      display: block;
      width: 100%;
      height: 3px;
      background-color: #fff;
      &.line-1 {
        transform: translateY(8px);
      }
      &.line-3 {
        transform: translateY(-8px);
      }
      .nav-opened & {
        transform-origin: center;
        &.line-1 {
          transform: translateY(0) rotate(45deg);
        }
        &.line-3 {
          transform: translateY(0) rotate(-45deg);
        }
        &.line-2 {
          opacity: 0;
        }
      }
      transition: 0.5s;
    }
  }
}

.admin-header {
  width: $adminHeaderWidth;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: -$adminHeaderWidth;
  background-color: #333;
  color: #fff;
  transition: 0.5s;
  .nav-opened & {
    left: 0px;
  }

  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    li {
      font-size: 16px;
      &:hover,
      &.active {
        background-color: black;
      }
      

      a {
        display: block;
        color: inherit;
        padding: 15px 20px;
        text-decoration: none;
        &:hover {
          color: lightgreen;
        }
      }
    }
  }
}
</style>
