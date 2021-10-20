<template>
  <form @submit.prevent="submit">
    <label>
      <span class="input-title">
        Category Name :
      </span>
      <input
        class="inp"
        placeholder=" name"
        id="fullName"
        type="text"
        v-model="categoryName"
      />
    </label>
    <div class="form-footer">
      <v-e-button
        type="submit"
        :disabled="loading"
        :loading="loading"
        class="COLOR"
        >Submit</v-e-button
      >
      <v-e-button class="cancel" @click="cancel">Cancel</v-e-button>
      <slot v-if="!loading"></slot>
      <!-- <v-e-loader  v-else></v-e-loader>-->
    </div>
  </form>
</template>

<script>
import VEButton from "../../Shared/VEButton.vue";
//import VELoader from "../../Shared/VELoader.vue";
//import { projectFirestore } from "../../../firebase/config";

export default {
  props: ["selectedCategory"],
  data() {
    return {
      categoryName: null,
      loading: false,
    };
  },
  computed: {
    isEditMod() {
      return !!this.selectedCategory;
    },
  },
  components: {
    VEButton,
    //VELoader,
  },
  mounted() {
    this.isEditMod && this.fillFormData();
  },
  methods: {
    cancel() {
      this.$emit("cancelform");
    },
    addCategory() {
      return this.$store.dispatch("submitCategoryForm", {
        name: this.categoryName,
      });
    },
    editCategory() {
      return this.$store.dispatch("submitEditCategoryForm", {
        category:{name:this.categoryName},
        id:this.selectedCategory.id
      });
    },
    submit() {
      this.loading = true;
      const callMethod = this.isEditMod ? "editCategory" : "addCategory";

      this[callMethod]().then(() => {
          this.categoryName = null;
          this.$emit("cancelform");
          this.loading = false;
        });
        
      /* let categories = {
      fullName: this.fullName,
      };
      projectFirestore.collection("categories").add(categories)*/
    },
    fillFormData() {
      this.categoryName = this.selectedCategory.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.inp {
  outline: none;
  margin-top: 5px;
  width: 100%;
  height: 30px;
  border-radius: 4px;
  font-family: cursive;
  font-size: 16px;
  border: 1px solid rgb(180, 180, 180);
}
.COLOR {
  background-color: lightgreen;
  color: white;
  height: 40px;
  border: 1px solid darkgreen;
}
.input-title {
  font-family: cursive;
  font-size: 20px;
  font-weight: bold;
}
</style>
