<template>
  <v-e-modal :show="show" @close="close" :width="400">
    <h4 class="modal-title">Are You Sure ? :(</h4>
    <v-e-button @click="deleteCatogary"  :desabled="loading" :loading="loading" >Delete</v-e-button>
    <v-e-button @click="close">Cancel</v-e-button>
    <slot v-if="!loading"></slot>
      <v-e-loader v-else></v-e-loader>
  </v-e-modal>
</template>

<script>
import VEModal from "@/components/Shared/VEModal.vue";
import VEButton from "../../Shared/VEButton.vue";
import VELoader from "../../Shared/VELoader.vue"


export default {
  name: "DeleteModal",
  components: {
    VEModal,
    VEButton,
    VELoader
  },
  props: ["show","loading","desabled"],
  methods: {
    close() {
      this.$emit("close");
    },
    deleteCatogary() {
      this.$emit("deleteCatogary");
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-title {
  font-size: 19px;
  text-align: center;
  margin-bottom: 20px;
  color: brown;
  font-family: cursive;
}
</style>
