<template>
  <form @submit.prevent="submit">
    <label>
      <span class="input-title"> Name </span>
      <input
        class="inp"
        placeholder=" name"
        id="fullName"
        type="text"
        v-model="form.Name"
      />
    </label>
    <label>
      <span class="input-title"> Price </span>
      <input
        class="inp"
        placeholder=" price"
        id="fullName"
        type="text"
        v-model="form.price"
      />
    </label>
    <label>
      <span class="input-title"> Image </span>
      <div class="preview-image">
     <img :src="imageUrl" >
     
      </div>
      <input
        class="inp"
        type="file"
        accept="image/*"
        v-modal="form.imagefile"
        @change="imageInputChangeHandler"
      />
    </label>
    <div :class="form-footer">
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

const initform = () => ({
  Name: null,
  price: null,
});
export default {
  props:['product'],
  data() {
    return {
      imagefile: null,
      imageUrl:null,
      //imagepreview: null,
      form:initform(),
      loading: false,
      reader : new FileReader(),
    };
  },
  created(){
   this.reader.onload = ()=>{
    this.imageUrl = this.reader.result;
  };
  },
  components: {
    VEButton,
    //VELoader,
  },
  methods: {
    cancel() {
      this.$emit("cancelform");
    },
    imageInputChangeHandler(e){
      this.imagefile=e.target.files[0];
      
     this. reader.readAsDataURL(this.imagefile);
    },
    fillFormData(){
     const {Name,price,imageUrl}=this.product;
     this.form={Name,price};
     this.imageUrl=imageUrl;
  },
  addProduct(){
     return this.$store.dispatch("submitProductForm",
       {product:this.form,imagefile:this.imagefile})
  },
   editProduct(){
     return this.$store.dispatch("submitEditProductForm",
       {product:this.form,imagefile:this.imagefile,id:this.product.id})
  },
    submit() {
      this.loading = true;
      const callMethod = this.isEditMod? 'editProduct':'addProduct';
      this[callMethod]().then(() => {
        this.form = initform();
        this.$emit("cancelform");
        this.loading = false;
      });
      /* let categories = {
      fullName: this.fullName,
      };
      projectFirestore.collection("categories").add(categories)*/
    },
    resetForm(){
      this.form = initform();
      this.imageUrl=null;
    }
    
  },
  computed:{
    isEditMod(){
      return !!this.product;
    }
  },
  
  mounted(){
    this.isEditMod && this.fillFormData();
  }
};
</script>

<style lang="scss" scoped>
.inp {
  outline: none;
  padding: 9px 4px 0px;
  margin-top: 5px;
  width: 100%;
  height: 40px;
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
.preview-image{
  max-width: 150px;
  img
  {
    width: 100px;
  }
}
</style>
