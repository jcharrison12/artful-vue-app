<template>
  <div class="home">
    <h1>Your Gallery</h1>
    <div v-for="image in galleries.images" :key="image.id">
      <img :src="image.image_url" />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      galleries: [],
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
          this.galleries = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
