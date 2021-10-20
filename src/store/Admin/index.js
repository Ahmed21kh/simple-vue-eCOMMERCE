//import * as firebase from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
import { uploadToStorage } from "../../firebase/storage";

export default {
  namespace: true,
  state: {
    navVisibility: false,
    categories: [],
    products: [],
  },
  mutations: {
    updateNavVisibility(state, visibility) {
      state.navVisibility = visibility;
    },
    updateCategories(state, categories) {
      state.categories = categories;
    },
    updateProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    submitCategoryForm({ commit, state }, category) {
      return firebase
        .firestore()
        .collection("categories")
        .add(category)
        .then((doc) => {
          commit(
            "updateCategories",
            state.categories.concat(
              Object.assign({}, category, {
                id: doc.id,
              })
            )
          );
        });
    },
    submitEditCategoryForm({ commit, state }, { category, id }) {
      return firebase
        .firestore()
        .collection("categories")
        .doc(id)
        .update(category)
        .then(() => {
          commit(
            "updateCategories",
            state.categories.map((cat) => {
              if (cat.id == id) {
                return Object.assign({}, cat, category);
              }
              return cat;
            })
          );
        });
    },

    getCategoryForm({ commit }) {
      firebase
        .firestore()
        .collection("categories")
        .orderBy("name")
        .get()
        .then((querySnapshot) => {
          let categories = querySnapshot.docs.map((doc) =>
            Object.assign({}, doc.data(), {
              id: doc.id,
            })
          );

          commit("updateCategories", categories);
        });
    },
    deleteCategoryForm({ commit, state }, categoryId) {
      return firebase
        .firestore()
        .collection("categories")
        .doc(categoryId)
        .delete()
        .then(() => {
          commit(
            "updateCategories",
            state.categories.filter((category) => category.id != categoryId)
          );
        });
    },
    //-------------------------------------------------------------------------------------
    submitProductForm({ commit, state }, { product, imagefile }) {
      return uploadToStorage(imagefile).then((imageUrl) => {
        const productObj = { ...product, imageUrl };
        return firebase
          .firestore()
          .collection("products")
          .add(productObj)
          .then((doc) => {
            commit(
              "updateProducts",
              state.products.concat(
                Object.assign({}, product, {
                  id: doc.id,
                })
              )
            );
          });
      });
    },
    submitEditProductForm({ commit, state }, { product, id, imagefile }) {
      const uploadImage = imagefile
        ? uploadToStorage(imagefile)
        : Promise.resolve(null);
      return uploadImage.then((imageUrl) => {
        const productObj = { ...product };
        if (imageUrl) productObj["imageUrl"] = imageUrl;
        return firebase
          .firestore()
          .collection("products")
          .doc(id)
          .update(productObj)
          .then(() => {
            commit(
              "updateProducts",
              state.products.map((pruduct) => {
                if (pruduct.id == id) {
                  return Object.assign({}, product, productObj);
                }
                return pruduct;
              })
            );
          });
      });
    },
    getProductForm({ commit }) {
      firebase
        .firestore()
        .collection("products")
        .orderBy("Name")
        .get()
        .then((querySnapshot) => {
          let products = querySnapshot.docs.map((doc) =>
            Object.assign({}, doc.data(), {
              id: doc.id,
            })
          );

          commit("updateProducts", products);
        });
    },
    deleteProductForm({ commit, state }, productId) {
      return firebase
        .firestore()
        .collection("products")
        .doc(productId)
        .delete()
        .then(() => {
          commit(
            "updateProducts",
            state.products.filter((product) => product.id != productId)
          );
        });
    },
  },
};
