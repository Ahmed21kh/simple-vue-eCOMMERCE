<template>
  <div id="admin-content-body" :class="{'nav-opened':navVisibility}">
  
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,100&display=swap" rel="stylesheet"/>
    <h1></h1>
    <admin-header></admin-header>
    <router-view/>
  </div>
</template>

<script>
import AdminHeader from "@/components/Admin/Header";

export default {
  components: {
    AdminHeader,
  },
  computed:{
    navVisibility(){
      return this.$store.state.admin.navVisibility;
    }
  }
};
</script>

<style lang="scss" scoped>
#admin-content-body
{
  padding: 0px;
}

</style>
