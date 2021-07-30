<template>
  <div class="home">
    <h1>Your Gallery</h1>
    <!-- <h2>{{ user }}</h2> -->
    <!-- <div v-for="image in user.images" :key="image.id"> -->
    <div v-for="(gallery, index) in user.galleries" :key="gallery.id">
      <img :src="images[index].image_url" />
      <h2>{{ gallery.notes }}</h2>
    </div>
  </div>
  <!-- </div> -->
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: [],
      images: [],
    };
  },
  created: function () {
    this.userHome();
  },
  methods: {
    userHome: function () {
      var user_id = this.$parent.getUserId();
      // console.log(parent.getUserId());
      axios
        .get("/users/" + user_id)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
          this.images = response.data.images;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
