<template>
  <div class="images-index">
    <h1>Search for a piece of art</h1>
    <input type="text" v-model="searchTerm" />
    <br />
    <br />
    <div v-for="image in filterBy(images, searchTerm)" :key="image.id">
      <router-link v-bind:to="`/images/${image.id}`">
        <img :src="image.image_url" :alt="image.title" />
      </router-link>
      <h1>{{ image.title }}</h1>
      <h2>{{ image.artist }}</h2>
      <h2>{{ image.museum }}</h2>
      <p>{{ image.description }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      images: [],
      searchTerm: "",
    };
  },
  created: function () {
    this.indexImages();
  },
  methods: {
    indexImages: function () {
      axios.get("/images").then((response) => {
        console.log(response.data);
        this.images = response.data;
      });
    },
  },
};
</script>
