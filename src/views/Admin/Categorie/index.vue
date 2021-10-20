<template>
  <div>
    <section-header @addModalEvent="showModalHandler">
      <template #title>
        Categories List
      </template>
      <template #action> </template>
    </section-header>
    <div class="page">
      <div class="categories-container" v-if="categories">
        <category-card
          v-for="category in categories"
          @deleteCatogary="showDeleteModalHandler"
          :key="category.id"
          @editCatogary="showModalHandler"
          :category="category"
        ></category-card>
      </div>
      <v-e-loader class="page-loader" v-else></v-e-loader>
    </div>
    <v-e-modal :show="showModal" @close="hideModalHandler" :width="800">
      <category-form
        :selectedCategory="selectedCategory"
        @cancelform="hideModalHandler"
      ></category-form>
    </v-e-modal>
    <delete-modal
      :show="showDeleteModal"
      @close="hideModalHandler"
      @deleteCatogary="deleteCategoryForm"
    >
    </delete-modal>
  </div>
</template>

<script>
import VEModal from "@/components/Shared/VEModal.vue";
import SectionHeader from "@/components/Admin/SectionHeader.vue";
import CategoryForm from "../../../components/Admin/Categories/CategoryForm.vue";
import DeleteModal from "../../../components/Admin/Categories/DeleteModal.vue";
import CategoryCard from "../../../components/Admin/Categories/CategoryCard.vue";
import VELoader from "../../../components/Shared/VELoader.vue";
//import Loader from "../../../components/Shared/loader.vue"

//import VEButton from "../../../components/Shared/VEButton.vue";
export default {
  components: {
    SectionHeader,
    VEModal,
    //Loader,
    // VEButton,
    DeleteModal,
    CategoryCard,
    CategoryForm,
    VELoader,
  },
  data() {
    return {
      showModal: false,
      showDeleteModal: false,
      selectCategoryToDelete: null,
      //deleteLoading:false
      selectedCategory: null,
    };
  },
  computed: {
    categories() {
      return this.$store.state.admin.categories;
    },
  },
  mounted() {
    this.$store.dispatch("getCategoryForm");
  },
  methods: {
    showModalHandler(category) {
      this.showModal = true;
      this.selectedCategory = category;
    },
    showDeleteModalHandler(id) {
      this.showDeleteModal = true;
      this.selectCategoryToDelete = id;
    },
    hideModalHandler() {
      this.showModal = false;
      this.showDeleteModal = false;
    },
    deleteCategoryForm() {
      //this.deleteLoading=true;
      this.$store
        .dispatch("deleteCategoryForm", this.selectCategoryToDelete)
        .then(() => {
          this.selectCategoryToDelete = null;
          // this.deleteLoading=false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.categories-container {
  display: flex;
  flex-wrap: wrap;
}
.page-loader {
  left: 50%;
  transform: translatex(-50%);
  margin-top: 300px;
}
</style>
