<template>
  <div>
    <section-header @addModalEvent="showModalHandler">
      <template #title>
        Products List
      </template>
      <template #action> </template>
    </section-header>
    <div class="page">
      <div class="products-container" v-if="products">
        <product-card
          v-for="product in products"
          @deleteProduct="showDeleteModalHandler"
          :key="product.id"
          :product="product"
          :is-admin="true"
          @editProduct="showModalHandler"
        >
        </product-card>
      </div>
      <v-e-loader class="page-loader" v-else></v-e-loader>
    </div>
    <v-e-modal :show="showModal" @close="hideModalHandler" :width="800">
      <product-form
        @cancelform="hideModalHandler"
        :product="selectedProduct"
      ></product-form>
    </v-e-modal>
    <delete-modal
      :show="showDeleteModal"
      @close="hideModalHandler"
      @deleteProduct="deleteProductForm"
    >
    </delete-modal>
  </div>
</template>

<script>
import VELoader from "../../../components/Shared/VELoader.vue";

import VEModal from "@/components/Shared/VEModal.vue";
import SectionHeader from "@/components/Admin/SectionHeader.vue";
import DeleteModal from "../../../components/Admin/Products/DeleteModal.vue";
import ProductForm from "../../../components/Admin/Products/ProductForm.vue";
import ProductCard from "../../../components/Admin/Products/ProductCard.vue";

export default {
  components: {
    SectionHeader,
    ProductForm,
    ProductCard,
    VEModal,
    VELoader,
    //Loader,
    // VEButton,
    DeleteModal,
  },
  data() {
    return {
      showModal: false,
      showDeleteModal: false,
      selectProductToDelete: null,
      //deleteLoading:false
      selectedProduct: null,
    };
  },
  computed: {
    products() {
      return this.$store.state.admin.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProductForm");
  },
  methods: {
    showModalHandler(product) {
      this.showModal = true;
      this.selectedProduct = product;
      
    },
    showDeleteModalHandler(id) {
      this.showDeleteModal = true;
      this.selectProductToDelete = id;
    },
    hideModalHandler() {
      this.showModal = false;
      this.showDeleteModal = false;
    },
    deleteProductForm() {
      //this.deleteLoading=true;
      this.$store
        .dispatch("deleteProductForm", this.selectProductToDelete)
        .then(() => {
          this.selectProductToDelete = null;
          // this.deleteLoading=false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-loader {
  left: 50%;
  transform: translatex(-50%);
  margin-top: 300px;
}
.products-container{
  margin-left: 185px;
}
</style
>>
