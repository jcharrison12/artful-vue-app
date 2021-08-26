<template>
  <div id="galleries-index">
    <br />
    <h1 class="center">Browse galleries</h1>
    <br />
    <div class="center" v-for="user in users" :key="user.id">
      <router-link v-bind:to="`/galleries/${user.id}`">
        <h2>{{ user.username }}'s gallery</h2>
      </router-link>
      <br />
      <br />
      <VueSlickCarousel v-bind="settings">
        <div v-for="image in user.images" :key="image.id">
          <img :src="image.image_url" alt="" />
        </div>
      </VueSlickCarousel>
      <br />
      <br />
    </div>
  </div>
</template>
<style>
.center {
  margin: auto;
  text-align: center;
  width: 50%;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 40%;
}
</style>
<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data: function () {
    return {
      users: [],
      images: [],
      componentKey: 0,
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    };
  },
  created: function () {
    this.indexUsers();
  },
  updated: function () {
    this.forceRerender;
  },
  methods: {
    indexUsers: function () {
      axios.get("/users").then((response) => {
        console.log(response.data);
        this.users = response.data;
        this.images = response.data.images;
      });
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>
