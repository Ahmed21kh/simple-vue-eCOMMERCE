<template>
  <div class="category-card">
    {{ category.name }}
    <div>
      <v-e-button class="vbtn" @click="$emit('deleteCatogary', category.id)"
        >DELETE</v-e-button
      >
      <v-e-button class="vbtn1" @click="$emit('editCatogary', category)"
        >EDIT</v-e-button
      >
    </div>
  </div>
</template>

<script>
import VEButton from "../../Shared/VEButton.vue";

export default {
  components: {
    VEButton,
  },
  props: ["category"],
};
</script>

<style lang="scss" scoped>
.category-card {
  background-color: white;
  box-shadow: 0 0 5px 0 gray;
  padding: 15px;
  border-radius: 5px;
  flex-basis: calc(50% - 20px);
  margin: 15px 15px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(odd) {
    margin-left: 0;
  }
  &:nth-child(even) {
    margin-left: 0;
  }

  & .vbtn {
    background-color: crimson;
    color: rgb(245, 237, 239);
    font-size: 16px;
  }
  & .vbtn1 {
    background-color: rgb(29, 138, 189);
    color: rgb(245, 237, 239);
    font-size: 16px;
  }
}
</style>
