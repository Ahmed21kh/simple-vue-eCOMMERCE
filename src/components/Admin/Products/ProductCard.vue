<template>
  <div class="product-card">
    <div class="admin-actions" v-if="isAdmin">
      <v-e-button @click="editProduct" color="info">Edit</v-e-button>
      <v-e-button @click="deletProduct" color="info">Delete</v-e-button>
    </div>
    <div class="card-btn"></div>
    <div class="card-img">
      <img :src="product.imageUrl" :alt="product.Name" height="400px" width="400px"/>
    </div>

    <div class="card-body">
      <h3>{{ product.Name }}</h3>
      <p>{{ product.price }} $</p>
    </div>

    <!--<v-e-button class="vbtn" @click="$emit('deleteProduct', product.id)"
      >DELETE</v-e-button
    >-->
  </div>
</template>

<script>
import VEButton from "../../Shared/VEButton.vue";

export default {
  components: {
    VEButton,
  },
  name: "product-card",
  props: ["product", "isAdmin"],
  methods: {
    editProduct() {
      this.$emit("editProduct", this.product);
    }, 
    deletProduct(){
     this.$emit('deleteProduct', this.product.id);
    },
  },
  
};
</script>

<style lang="scss" scoped>
.product-card {
  
    position: relative;
    max-width: 282px;
    font-family: cursive;
    box-shadow: 0 0 5px 0 black;
    align-items: center;
    justify-content: center;
    margin: 15px 15px 15px 15px;
    text-align: center;
    display: inline-block;
    //margin-left: 104px;

  .admin-actions {
    position: absolute;
    top: 15px;
    right: 15px;

    z-index: 3;
    .admin-actions v-e-button {
      margin-left: 100px;
    }
  }

  .card-img {
    img {
      max-width: 100%;
      border-radius: 5px 5px 0 0;
      margin: 0px;
    }
  }
  .edit {
    margin: 40px 0px 0px 500px;
  }

  /* &:nth-child(odd) {
    margin-left: 0;
  }
  &:nth-child(even) {
    margin-right: 0;
  }

   & .vbtn {
    background-color: crimson;
    color: rgb(245, 237, 239);
    font-size: 16px;
    left: 0px;
  }*/
}
</style>
