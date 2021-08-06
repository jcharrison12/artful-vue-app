<template>
  <div class="home">
    <h1>Your Gallery</h1>
    <!-- <h2>{{ user }}</h2> -->
    <!-- <div v-for="image in user.images" :key="image.id"> -->
    <div v-for="(gallery, index) in user.galleries" :key="gallery.id">
      <img :src="images[index].image_url" />
      <h1>{{ images[index].title }}</h1>
      <h2>{{ images[index].artist }}</h2>
      <h2>{{ images[index].museum }}</h2>
      <p>
        <strong>Your notes:</strong>
        {{ gallery.notes }}
      </p>
      <p v-if="gallery.seen == true">You have seen this art in person.</p>
      <p v-else>
        You have
        <strong>not</strong>
        seen this art in person.
      </p>
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
