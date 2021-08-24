<template>
  <div class="galleries-index">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-60 col-lg-10">
          <div class="title text-center">
            <br />
            <h1 class="mb-10">{{ user.username }}'s Gallery</h1>
            <h4>A.k.a all their cool art</h4>
          </div>
        </div>
      </div>
      <div class="card-deck">
        <div class="col-lg-6" v-for="(gallery, index) in galleries" :key="gallery.id">
          <div class="card">
            <img class="card-img-top" :src="images[index].image_url" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ images[index].title }}</h5>
              <h5 class="card-title">{{ images[index].artist }}</h5>
              <p class="card-text">
                <strong>{{ user.username }}'s notes:</strong>
                {{ gallery.notes }}
              </p>
              <p class="card-text" v-if="gallery.seen == true">They have seen this art in person.</p>
              <p class="card-text" v-else>
                They have
                <strong>not</strong>
                seen this art in person.
              </p>
              <p class="card-text">
                <small class="text-muted">at {{ images[index].museum }}</small>
              </p>
            </div>
          </div>
        </div>
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
