<template>
  <div class="images-index">
    <div class="row">
      <div class="col-lg-8 col-md-8 center">
        <br />
        <h3 class="mb-30 center">Search for a piece of art</h3>
        <form class="center" action="#">
          <div class="mt-10">
            <input
              type="text"
              v-model="searchTerm"
              name="search"
              placeholder="The Mona Lisa"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'First Name'"
              required
              class="single-input"
            />
          </div>
        </form>
      </div>
    </div>
    <!-- <input type="text" v-model="searchTerm" /> -->
    <br />
    <br />
    <!-- <div v-for="image in filterBy(images, searchTerm)" :key="image.id">
      <router-link v-bind:to="`/images/${image.id}`">
        <img :src="image.image_url" :alt="image.title" />
      </router-link>
      <h1>{{ image.title }}</h1>
      <h2>{{ image.artist }}</h2>
      <h2>{{ image.museum }}</h2>
      <p>{{ image.description }}</p>
    </div> -->
    <div class="card">
      <div class="center" v-for="image in filterBy(images, searchTerm)" :key="image.id">
        <router-link v-bind:to="`/images/${image.id}`">
          <img class="card-img-top" :src="image.image_url" :alt="image.title" />
        </router-link>
        <div class="card-body">
          <h2 class="card-text">{{ image.title }}</h2>
          <h3 class="card-text">{{ image.artist }}</h3>
          <h4 class="card-text">{{ image.museum }}</h4>
          <p class="card-text">{{ image.description }}</p>
        </div>
      </div>
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
