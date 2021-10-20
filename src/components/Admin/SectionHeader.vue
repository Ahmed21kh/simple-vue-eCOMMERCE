<template>
  <div class="section-header">
    <h3 class="section-title">
      <slot name="title"></slot>
    </h3>
    <div class="action">
       <v-e-button type="button" @click="fireAddModalEvent" >
                Add 
       </v-e-button>
    </div>
  </div>
</template>


<script>
import VEButton from '../Shared/VEButton.vue';

export default {
  components:  {VEButton},
  methods:{
    fireAddModalEvent(){
      console.log('hallo');
      this.$emit('addModalEvent');
    }

  }

};
</script>

<style lang="scss" scoped>
.section-title{
  display: flex;
  padding: 0px;
  margin: 20px;
}
.section-header{
  border-bottom: 1px solid rgb(218, 215, 215);
  padding: 15px 0px 0px;
  display: flex;
  justify-content: space-between;

}

</style>
