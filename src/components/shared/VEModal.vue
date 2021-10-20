<template>
<transition name="fade">
  <div class="modal-container" v-if="show" @click.self="$emit('close')">
      <div class="modal-content" :style="{'max-width':width+'px'}">
       <slot></slot>

      </div>
  </div>
</transition>
</template>

<script>
export default {
    name:'ve-modal',
    props:{
        show:{
            type:Boolean,
            required:false,
            default:false

        },
        width:{
            type:Number,
            required:false,
            default:500
        }
    }

}
</script>

<style lang="scss" scoped>
.modal-container
{
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 50;
    background-color: rgba(0,0,0,0.5);
    padding: 20px;
    box-sizing: border-box;
    &.fade-enter,
    &.fade-leave-to{
        opacity: 0;
    }
    &.fade-enter-active,
    &.fade-leave-active{
        transition: opacity 0.3s;
    }

    
    .modal-content
    {
        margin: 50px auto;
        width: 100%;
        background-color: white;
        padding: 20px;
        border-radius: 5px;
      
        box-sizing: border-box;
        
    }
}
</style>