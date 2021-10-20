<template>
  <button
    :type="type"
    :disabled="disabled"
    :loading="loading"
    :class="['ve-btn', `ve-btn-${color}`]"
    @click="$emit('click')"
  >
    <slot v-if="!loading"></slot>
    <v-e-loader v-else></v-e-loader>
  </button>
</template>

<script>
import VELoader from "./VELoader.vue";
export default {
  components: { VELoader },
  name: "ve-button",
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    color: {
      type: String,
      required: false,
      default: "default",
      validator: function(value) {
        // The value must match one of these strings
        return ["default", "success", "error", "info"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.ve-btn {
  border: none;
  background-color: rgb(40, 94, 165);
  padding: 8px 16px;
  margin: 20px;
  opacity: 1;
  color: white;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
