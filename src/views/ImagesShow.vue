<template>
  <div class="images-show">
    <div class="container">
      <h2>{{ image.title }}</h2>
      <img :src="image.image_url" :alt="image.title" />
      <h2>{{ image.artist }}</h2>
      <p>{{ image.museum }}</p>
      <p>{{ image.description }}</p>
      <router-link to="/images">Back to all images</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      image: [],
    };
  },
  created: function () {
    axios.get("/images/" + this.$route.params.id).then((response) => {
      this.image = response.data;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>
