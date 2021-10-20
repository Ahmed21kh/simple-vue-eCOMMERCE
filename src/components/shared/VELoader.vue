<template>
  <div :class="[`size-${size}`, 'lds-ring']"><div></div><div></div><div></div><div></div></div>
</template>

<script>
export default {
    name:'ve-loader',
     props: {
    size: {
      type: String,
      required: false,
      default: "default",
      validator: function(value) {
        // The value must match one of these strings
        return ["default", "small", "large"].indexOf(value) !== -1;
      }
    },
    color: {
      type: String,
      required: false,
      default: "default",
      validator: function(value) {
        // The value must match one of these strings
        return ["default", "white"].indexOf(value) !== -1;
      }
    },

}
}
</script>

<style lang="scss" scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;

}
.lds-ring {
  div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 34px;
  height: 34px;
  margin-left: 20px;
  margin-top: -20px;
  border: 4px solid rgb(10, 109, 10);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(89, 212, 144) transparent transparent transparent;
 }
 

}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>