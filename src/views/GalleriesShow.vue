<template>
  <div class="galleries-index">
    <div class="home">
      <h1 class="center">{{ user.username }}'s Gallery</h1>
      <div v-for="(gallery, index) in galleries" :key="gallery.id">
        <img :src="images[index].image_url" />
        <h1 class="center">{{ images[index].title }}</h1>
        <h2 class="center">{{ images[index].artist }}</h2>
        <h2 class="center">{{ images[index].museum }}</h2>
        <p class="center">
          <strong>{{ user.username }}'s notes:</strong>
          {{ gallery.notes }}
        </p>
        <p class="center" v-if="gallery.seen == true">They have seen this art in person.</p>
        <p class="center" v-else>
          They have
          <strong>not</strong>
          seen this art in person.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: [],
      images: [],
      galleries: [],
    };
  },
  created: function () {
    this.userShow();
  },
  methods: {
    userShow: function () {
      // console.log(parent.getUserId());
      axios
        .get("/users/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
          this.images = response.data.images;
          this.images.sort((x, y) => {
            x.id - y.id;
          });
          this.galleries = response.data.galleries;
          this.galleries.sort(function (a, b) {
            return a.image_id - b.image_id;
          });
          console.log(this.galleries);
          console.log(this.images);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
